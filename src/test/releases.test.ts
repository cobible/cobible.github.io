import { describe, expect, it } from "vitest";
import { releaseDownloads, type Release } from "@/lib/releases";

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
  });
  it("does not substitute a different platform when an asset is missing", () => {
    expect(releaseDownloads({ ...release, assets: release.assets.filter((asset) => asset.name.endsWith(".ipa")) }).apk).toBeUndefined();
  });
});