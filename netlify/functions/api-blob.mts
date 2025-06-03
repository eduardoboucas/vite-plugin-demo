import { getStore } from "@netlify/blobs";
import { Context } from "@netlify/functions";

export const config = {
  path: "/api/blob/:key",
};

export default async function handler(request: Request, context: Context) {
  if (request.method === "GET") {
    const key = context.params.key;
    if (!key) {
      return new Response("Bad Request", { status: 400 });
    }

    const blobStore = getStore("shapes");
    const blob = await blobStore.get(key, { type: "json" });
    return new Response(
      JSON.stringify({
        blob,
      })
    );
  } else {
    return new Response("Method not allowed", {
      status: 405,
    });
  }
}
