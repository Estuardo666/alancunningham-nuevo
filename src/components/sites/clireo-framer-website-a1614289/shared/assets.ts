/** Every downloaded asset for this clone lives under one namespaced root. */
export const ASSET_BASE =
  "/sites/clireo-framer-website-a1614289/root-8a5edab2/images";

export const asset = (file: string) => `${ASSET_BASE}/${file}`;
