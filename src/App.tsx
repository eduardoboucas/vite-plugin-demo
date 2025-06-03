import ShapeEditor from "./ShapeEditor";

function App() {
  return (
    <>
      <h1 className="mb-10">Blobs x Blobs</h1>
      <div className="explainer mb-12">
        <p>
          <a href="https://docs.netlify.com/blobs/overview/">Netlify Blobs</a>{" "}
          provides an object store for any kind of data, be it JSON, binary, or{" "}
          <a href="https://mk.gg/projects/chalkstream">really</a> anything else
          (<a href="https://mk.gg/projects/turbofan">really!</a>). In this
          example, the blob store is used to{" "}
          <strong>hold the data of user-generated random blobby shapes</strong>.
        </p>
        <p>
          Below is an Astro island with a React component for editing, uploading
          and viewing blobs to the blob store 🙂.
        </p>
      </div>
      <ShapeEditor />
    </>
  );
}

export default App;
