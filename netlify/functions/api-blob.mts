import { getStore } from "@netlify/blobs";
import { Context } from "@netlify/functions";

export const config = {
  method: "GET",
  path: "/api/blob/:key"
};

export default async function handler(request: Request, context: Context) {
  const key = context.params.key;
  if (!key) {
    return new Response("Bad Request", { status: 400 });
  }

  const blobStore = getStore("shapes");
  const blob = await blobStore.get(key, { type: "json" });

  return Response.json({ blob });
}
