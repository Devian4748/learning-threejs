import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls";
import GUI from "lil-gui";
/**
 * Textures
 */

// Behind logic of TextureLoader
//
// const image = new Image();
// const texture = new THREE.Texture(image);
// texture.colorSpace = THREE.SRGBColorSpace;
// image.onload = () => {
//   texture.needsUpdate = true;
// };
// image.src = "/learning-threejs/textures/door/color.jpg";

const loadingManager = new THREE.LoadingManager();
loadingManager.onError = () => {
  console.log("loading error");
};
loadingManager.onStart = () => {
  console.log("loading start");
};
loadingManager.onProgress = () => {
  console.log("loading progress");
};
loadingManager.onLoad = () => {
  console.log("loading finish");
};

const textureLoader = new THREE.TextureLoader(loadingManager);
const colorTexture = textureLoader.load(
  "/learning-threejs/textures/door/color.jpg"
);
const alphaTexture = textureLoader.load(
  "/learning-threejs/textures/door/alpha.jpg"
);
const heightTexture = textureLoader.load(
  "/learning-threejs/textures/door/height.jpg"
);
const ambientOcclusionTexture = textureLoader.load(
  "/learning-threejs/textures/door/ambientOcclusion.jpg"
);
const metalnessTexture = textureLoader.load(
  "/learning-threejs/textures/door/metalness.jpg"
);
const normalTexture = textureLoader.load(
  "/learning-threejs/textures/door/normal.jpg"
);
const roughnessTexture = textureLoader.load(
  "/learning-threejs/textures/door/roughness.jpg"
);
const checkboardTexture = textureLoader.load(
  "/learning-threejs/textures/checkerboard-1024x1024.png"
);
const smallCheckboardTexture = textureLoader.load(
  "/learning-threejs/textures/checkerboard-8x8.png"
);
const minecraftTexture = textureLoader.load(
  "/learning-threejs/textures/minecraft.png"
);

colorTexture.colorSpace = THREE.SRGBColorSpace;
alphaTexture.colorSpace = THREE.SRGBColorSpace;
heightTexture.colorSpace = THREE.SRGBColorSpace;
ambientOcclusionTexture.colorSpace = THREE.SRGBColorSpace;
metalnessTexture.colorSpace = THREE.SRGBColorSpace;
normalTexture.colorSpace = THREE.SRGBColorSpace;
roughnessTexture.colorSpace = THREE.SRGBColorSpace;
checkboardTexture.colorSpace = THREE.SRGBColorSpace;
minecraftTexture.colorSpace = THREE.SRGBColorSpace;

// colorTexture.repeat.x = 2;
// colorTexture.repeat.y = 2;

// colorTexture.wrapS = THREE.MirroredRepeatWrapping;
// colorTexture.wrapT = THREE.MirroredRepeatWrapping;

// colorTexture.offset.x = 0.1;
// colorTexture.offset.y = 0.1;

// colorTexture.center.x = 0.5;
// colorTexture.center.y = 0.5;
// colorTexture.rotation = Math.PI * 0.25;

// checkboardTexture.minFilter = THREE.NearestFilter;
// colorTexture.minFilter = THREE.NearestFilter;

// smallCheckboardTexture.magFilter = THREE.NearestFilter;

// minecraftTexture.generateMipmaps = false;
// minecraftTexture.magFilter = THREE.NearestFilter;

// DEBUG
const debugObject = {};
const gui = new GUI();
gui.hide();
const cameraGUI = gui.addFolder("camera");
const textureGUI = gui.addFolder("texture");
const textureTransformGUI = gui.addFolder("texture transform");
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  map: checkboardTexture,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.z = 1.27;
scene.add(camera);

// Control
const control = new OrbitControls(camera, canvas);
control.enableDamping = true;

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.render(scene, camera);

// Tick
const tick = () => {
  // Update Control
  control.update();
  // Update Renderer
  renderer.render(scene, camera);
  // Request Next Frame
  window.requestAnimationFrame(tick);
};
tick();

/**
 * Window Event Handler
 */

// Resize
window.addEventListener("resize", () => {
  // Adapt window sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  // Adapt camera's aspect ratio
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  // Adapt renderer's size
  renderer.setSize(sizes.width, sizes.height);
  // Adapt renderer's aspect ratio
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

window.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    gui.show(gui._hidden);
  }
});

/**
 * DEBUG
 */

// camera
cameraGUI.add(camera.position, "z").min(0).max(10).step(0.01);

// texture - color
debugObject.changeColorTexture = () => {
  mesh.material.map = colorTexture;
};
textureGUI.add(debugObject, "changeColorTexture").name("color");

// texture - alpha
debugObject.changeAlphaTexture = () => {
  mesh.material.map = alphaTexture;
};
textureGUI.add(debugObject, "changeAlphaTexture").name("alpha");

// texture - height
debugObject.changeHeightTexture = () => {
  mesh.material.map = heightTexture;
};
textureGUI.add(debugObject, "changeHeightTexture").name("height");

// texture - ambientOcclusion
debugObject.changeAmbientOcclusionTexture = () => {
  mesh.material.map = ambientOcclusionTexture;
};
textureGUI
  .add(debugObject, "changeAmbientOcclusionTexture")
  .name("ambient occlusion");

// texture - metalness
debugObject.changeMetalnessTexture = () => {
  mesh.material.map = metalnessTexture;
};
textureGUI.add(debugObject, "changeMetalnessTexture").name("metalness");

// texture - normal
debugObject.changeNormalTexture = () => {
  mesh.material.map = normalTexture;
};
textureGUI.add(debugObject, "changeNormalTexture").name("normal");

// texture - roughness
debugObject.changeRoughnessTexture = () => {
  mesh.material.map = roughnessTexture;
};
textureGUI.add(debugObject, "changeRoughnessTexture").name("roughness");

// texture - checkboard 1024 * 1024
debugObject.changeCheckboardTexture = () => {
  mesh.material.map = checkboardTexture;
};
textureGUI
  .add(debugObject, "changeCheckboardTexture")
  .name("checkboard 1024*1024");

// texture - checkboard 8 * 8
debugObject.changeSmallCheckboardTexture = () => {
  mesh.material.map = smallCheckboardTexture;
};
textureGUI
  .add(debugObject, "changeSmallCheckboardTexture")
  .name("checkboard 8*8");

// texture - minecraft
debugObject.changeMinecraftTexture = () => {
  mesh.material.map = minecraftTexture;
};
textureGUI.add(debugObject, "changeMinecraftTexture").name("minecraft");

// texture transform
// textureTransformGUI
//   .add(mesh.material.map.offset, "x")
//   .min(0)
//   .max(1)
//   .step(0.01)
//   .name("offset : x");
// textureTransformGUI
//   .add(mesh.material.map.offset, "y")
//   .min(0)
//   .max(1)
//   .step(0.01)
//   .name("offset : y");
// textureTransformGUI
//   .add(mesh.material.map.repeat, "x")
//   .min(1)
//   .max(5)
//   .step(1)
//   .name("repeat: x");
// textureTransformGUI
//   .add(mesh.material.map.repeat, "y")
//   .min(1)
//   .max(5)
//   .step(1)
//   .name("repeat: y");
// textureTransformGUI
//   .add(mesh.material.map, "rotation")
//   .min(0)
//   .max(Math.PI * 2)
//   .step(0.01)
//   .name("rotation");
// textureTransformGUI
//   .add(mesh.material.map.center, "x")
//   .min(0)
//   .max(1)
//   .step(0.01)
//   .name("center : x");
// textureTransformGUI
//   .add(mesh.material.map.center, "y")
//   .min(0)
//   .max(1)
//   .step(0.01)
//   .name("center : y");

// debugObject.changeRepeatWrapping = () => {
//   mesh.material.map.wrapS = THREE.RepeatWrapping;
//   mesh.material.map.wrapT = THREE.RepeatWrapping;
// };
// textureTransformGUI
//   .add(debugObject, "changeRepeatWrapping")
//   .name("RepeatWrapping");
// debugObject.changeMirroredRepeatWrapping = () => {
//   mesh.material.map.wrapS = THREE.MirroredRepeatWrapping;
//   mesh.material.map.wrapT = THREE.MirroredRepeatWrapping;
// };
// textureTransformGUI
//   .add(debugObject, "changeMirroredRepeatWrapping")
//   .name("MirroredRepeatWrapping");
