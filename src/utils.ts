import { MetadataCb } from ".";
import fetch from "node-fetch";

export const fetchMetadata =
  (cb: MetadataCb) =>
  async (uri: string): Promise<{ name: string; image: string }> => {
    console.log(uri)
    const res = await fetch("https://ipfs.io/ipfs/" + uri.slice(7)).then((r) => r.json());
    return cb(res);
  };
