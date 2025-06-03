import ShapeEditor from "./ShapeEditor";

function App() {
  return (
    <>
      <h1 className="mt-8 mb-10">Netlify Vite Plugin Demo</h1>
      <div className="explainer mb-12">
        <p className="flex flex-row justify-center">
          <a href="https://app.netlify.com/start/deploy?repository=https://github.com/eduardoboucas/vite-plugin-demo">
            <img src="https://www.netlify.com/img/deploy/button.svg" />
          </a>
        </p>
        <p>
          Welcome to the demo site for the new{" "}
          <a href="https://github.com/netlify/primitives/tree/main/packages/vite-plugin">
            Netlify Vite plugin
          </a>
          ! This is a vanilla Vite application using React.
        </p>
        <p>
          This Netlify Vite plugin enables local development with Netlify
          platform features without requiring the Netlify CLI.
        </p>
        <p>
          Behind the scenes, we're using{" "}
          <a href="https://docs.netlify.com/functions/overview/">
            Netlify Functions
          </a>{" "}
          to read and write these shapes and their names to a persistent data
          store powered by{" "}
          <a href="https://docs.netlify.com/blobs/overview/">Netlify Blobs</a>.
        </p>
        <p>
          Click the <strong>Randomize</strong> button below to generate a random
          shape with a unique name. Then, click <strong>Upload</strong> to save
          it to the data store.
        </p>
      </div>
      <ShapeEditor />
    </>
  );
}

export default App;
