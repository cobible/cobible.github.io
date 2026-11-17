import { describe, expect, it } from "vitest";
import { releaseDownloads, type Release } from "@/lib/releases";
import { detectPlatform } from "@/lib/content";

const release: Release = {
  tag_name: "v9.1.9", draft: false, prerelease: false,
  assets: ["android.apk", "windows.zip", "macos.dmg", "ios.ipa"].map((suffix) => ({
    name: `CoBible-v9.1.9-${suffix}`,
    browser_download_url: `https://github.com/antkeepapp/cobible-releases/releases/download/v9.1.9/CoBible-v9.1.9-${suffix}`,
  })),
};

describe("Latest stable release downloads", () => {
  it("offers the Android APK from the same release", () => {
    expect(releaseDownloads(release).apk?.name).toBe("CoBible-v9.1.9-android.apk");
  });
  it("offers the Windows x64 package", () => {
    expect(releaseDownloads(release).windows?.name).toBe("CoBible-v9.1.9-windows.zip");
  });
  it("offers the universal macOS disk image", () => {
    expect(releaseDownloads(release).mac?.name).toBe("CoBible-v9.1.9-macos.dmg");
  });
  it("offers the iPhone and iPad IPA from the same latest release", () => {
    expect(releaseDownloads(release).ios?.browser_download_url).toBe("https://github.com/antkeepapp/cobible-releases/releases/download/v9.1.9/CoBible-v9.1.9-ios.ipa");
  });
  it("does not substitute another platform when the iOS IPA is missing", () => {
    expect(releaseDownloads({ ...release, assets: release.assets.filter((asset) => !asset.name.endsWith(".ipa")) }).ios).toBeUndefined();
  });
  it("does not offer draft or preview builds", () => {
    expect(releaseDownloads({ ...release, draft: true })).toEqual({});
    expect(releaseDownloads({ ...release, prerelease: true })).toEqual({});
  });
  it("handles new version filenames without a site update", () => {
    const next = { ...release, tag_name: "v10.0.0", assets: release.assets.map((asset) => ({
      name: asset.name.replaceAll("9.1.9", "10.0.0"),
      browser_download_url: asset.browser_download_url.replaceAll("9.1.9", "10.0.0"),
    })) };
    expect(releaseDownloads(next).apk?.browser_download_url).toContain("/v10.0.0/CoBible-v10.0.0-android.apk");
    expect(releaseDownloads(next).ios?.browser_download_url).toBe("https://github.com/antkeepapp/cobible-releases/releases/download/v10.0.0/CoBible-v10.0.0-ios.ipa");
  });
  it("does not substitute a different platform when an asset is missing", () => {
    expect(releaseDownloads({ ...release, assets: release.assets.filter((asset) => asset.name.endsWith(".ipa")) }).apk).toBeUndefined();
  });
});

describe("Client platform detection", () => {
  it("detects Android as APK", () => {
    expect(detectPlatform("Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36")).toBe("apk");
  });
  it("detects iPhone as iOS IPA", () => {
    expect(detectPlatform("Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)")).toBe("ios");
  });
  it("detects classic iPad as iOS IPA", () => {
    expect(detectPlatform("Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X)")).toBe("ios");
  });
  it("detects modern iPadOS (desktop Safari UA with touch) as iOS IPA", () => {
    expect(detectPlatform("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)", 5)).toBe("ios");
  });
  it("detects macOS desktop without touch as Mac", () => {
    expect(detectPlatform("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)", 0)).toBe("mac");
  });
  it("detects Windows as Windows package", () => {
    expect(detectPlatform("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36")).toBe("windows");
  });
  it("returns null for Linux or unknown systems", () => {
    expect(detectPlatform("Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0)")).toBeNull();
    expect(detectPlatform("")).toBeNull();
  });
});