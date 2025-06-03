import { getStore } from "@netlify/blobs";

export const config = {
  path: "/api/blobs",
};

export default async function handler(request: Request) {
  if (request.method === "POST") {
    const parameters = await request.json();
    const blobStore = getStore("shapes");
    const key = parameters.name;
    await blobStore.setJSON(key, parameters);
    return new Response(
      JSON.stringify({
        message: `Stored shape "${key}"`,
      })
    );
  } else if (request.method === "GET") {
    try {
      const blobStore = getStore({ name: "shapes", consistency: "strong" });
      const data = await blobStore.list();
      const keys = data.blobs.map(({ key }) => key);
      return new Response(
        JSON.stringify({
          keys,
        })
      );
    } catch (e) {
      console.error(e);
      return new Response(
        JSON.stringify({
          keys: [],
          error: "Failed listing blobs",
        })
      );
    }
  } else {
    return new Response("Method not allowed", {
      status: 405,
    });
  }
}
