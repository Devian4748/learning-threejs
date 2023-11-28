export default {
  root: "src/",
  publicDir: "../static/",
  base: "/learning-threejs/",
  server: {
    host: true, // Open to local network and display URL
    open: !("SANDBOX_URL" in process.env || "CODESANDBOX_HOST" in process.env), // Open if it's not a CodeSandbox
  },
  build: {
    outDir: "../dist", // Output in the dist/ folder
    emptyOutDir: true, // Empty the folder first
    sourcemap: true, // Add sourcemap
    rollupOptions: {
      input: {
        main: "src/index.html",
        firstProject: "src/pages/first-project/index.html",
        transformObjects: "src/pages/transform-objects/index.html",
        animations: "src/pages/animations/index.html",
        cameras: "src/pages/cameras/index.html",
        fullscreenAndResizing: "src/pages/fullscreen-and-resizing/index.html",
        geometries: "src/pages/geometries/index.html",
        debugUI: "src/pages/debug-ui/index.html",
        textures: "src/pages/textures/index.html",
        // Add other entry points here if needed
      },
    },
  },
};
