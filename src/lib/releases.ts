export const RELEASES_URL = "https://github.com/antkeepapp/cobible-releases/releases/latest";
export const RELEASES_API = "https://api.github.com/repos/antkeepapp/cobible-releases/releases/latest";

export type DownloadPlatform = "apk" | "windows" | "mac";
type ReleaseAsset = { name: string; browser_download_url: string };
export type Release = {
  tag_name: string;
  draft: boolean;
  prerelease: boolean;
  assets: ReleaseAsset[];
};

const patterns: Record<DownloadPlatform, RegExp> = {
  apk: /(?:^|[-_])android\.apk$/i,
  windows: /(?:^|[-_])windows(?:[-_]x64)?\.(?:zip|exe|msi)$/i,
  mac: /(?:^|[-_])macos(?:[-_]universal)?\.dmg$/i,
};

export function releaseDownloads(release: Release) {
  const downloads: Partial<Record<DownloadPlatform, ReleaseAsset>> = {};
  if (release.draft || release.prerelease) return downloads;
  for (const platform of ["apk", "windows", "mac"] as const) {
    const asset = release.assets.find((item) => patterns[platform].test(item.name)
      && item.browser_download_url.startsWith("https://github.com/antkeepapp/cobible-releases/releases/download/"));
    if (asset) downloads[platform] = asset;
  }
  return downloads;
}

export async function fetchLatestRelease(): Promise<Release> {
  const response = await fetch(RELEASES_API, { headers: { Accept: "application/vnd.github+json" } });
  if (!response.ok) throw new Error(`GitHub release request failed (${response.status})`);
  const release = await response.json();
  if (typeof release.tag_name !== "string" || !Array.isArray(release.assets)
    || typeof release.draft !== "boolean" || typeof release.prerelease !== "boolean"
    || !release.assets.every((asset: ReleaseAsset) => typeof asset.name === "string" && typeof asset.browser_download_url === "string")) {
    throw new Error("Invalid GitHub release response");
  }
  return release;
}