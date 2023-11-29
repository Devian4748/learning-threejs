import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls";
import { FontLoader } from "three/addons/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import GUI from "lil-gui";

// Textures
const loadingManager = new THREE.LoadingManager();

loadingManager.onProgress = (url, loaded, total) => {
  console.log("loading progress", url, loaded, total);
};
loadingManager.onStart = () => {
  console.log("loading start");
};
loadingManager.onLoad = () => {
  console.log("loading end");
};
loadingManager.onError = (url) => {
  console.log("loading error", url);
};
const textureLoader = new THREE.TextureLoader(loadingManager);

// matcap
const matcaps1Texture = textureLoader.load(
  "/learning-threejs/textures/matcaps/1.png"
);

const matcaps2Texture = textureLoader.load(
  "/learning-threejs/textures/matcaps/2.png"
);

const matcaps3Texture = textureLoader.load(
  "/learning-threejs/textures/matcaps/3.png"
);

const matcaps4Texture = textureLoader.load(
  "/learning-threejs/textures/matcaps/4.png"
);

const matcaps5Texture = textureLoader.load(
  "/learning-threejs/textures/matcaps/5.png"
);

const matcaps6Texture = textureLoader.load(
  "/learning-threejs/textures/matcaps/6.png"
);

const matcaps7Texture = textureLoader.load(
  "/learning-threejs/textures/matcaps/7.png"
);

const matcaps8Texture = textureLoader.load(
  "/learning-threejs/textures/matcaps/8.png"
);

matcaps1Texture.colorSpace = THREE.SRGBColorSpace;
matcaps2Texture.colorSpace = THREE.SRGBColorSpace;
matcaps3Texture.colorSpace = THREE.SRGBColorSpace;
matcaps4Texture.colorSpace = THREE.SRGBColorSpace;
matcaps5Texture.colorSpace = THREE.SRGBColorSpace;
matcaps6Texture.colorSpace = THREE.SRGBColorSpace;
matcaps7Texture.colorSpace = THREE.SRGBColorSpace;
matcaps8Texture.colorSpace = THREE.SRGBColorSpace;

// Debug
const gui = new GUI();
const debugObject = {};
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Main
const main = document.querySelector("main");

// Scene
const scene = new THREE.Scene();

// Axes Helper
// const axesHelper = new THREE.AxesHelper(2);
// scene.add(axesHelper);
/**
 * Objects
 */

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// FontLoader
const fontLoader = new FontLoader();
fontLoader.load(
  "/learning-threejs/fonts/helvetiker_regular.typeface.json",
  (font) => {
    debugObject.fontText = "Devian";
    debugObject.fontParameters = {
      font,
      size: 0.5,
      height: 0.2,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.005,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 5,
    };
    const geometry = new TextGeometry(
      debugObject.fontText,
      debugObject.fontParameters
    );
    // geometry.computeBoundingBox();
    // geometry.translate(
    //   -(geometry.boundingBox.max.x - debugObject.fontParameters.bevelSize) *
    //     0.5,
    //   -(geometry.boundingBox.max.y - debugObject.fontParameters.bevelSize) *
    //     0.5,
    //   -(
    //     geometry.boundingBox.max.z - debugObject.fontParameters.bevelThickness
    //   ) * 0.5
    // );
    geometry.center();
    const material = new THREE.MeshMatcapMaterial();
    material.matcap = matcaps8Texture;
    const mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

    // DEBUG
    gui
      .add(debugObject.fontParameters, "curveSegments")
      .min(1)
      .max(36)
      .step(1)
      .onFinishChange(() => {
        mesh.geometry.dispose();
        mesh.geometry = new TextGeometry(
          debugObject.fontText,
          debugObject.fontParameters
        );
        mesh.geometry.center();
      });
    gui
      .add(debugObject.fontParameters, "bevelSegments")
      .min(1)
      .max(36)
      .step(1)
      .onFinishChange(() => {
        mesh.geometry.dispose();
        mesh.geometry = new TextGeometry(
          debugObject.fontText,
          debugObject.fontParameters
        );
        mesh.geometry.center();
      });
  }
);

// Objects
const torusGroup = new THREE.Group();
const geometry = new THREE.TorusGeometry(0.3, 0.2, 16, 32);
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcaps8Texture;
const torusCount = 150;

console.time("Torus");
for (let i = 0; i < torusCount; i++) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = (Math.random() - 0.5) * 15;
  mesh.position.y = (Math.random() - 0.5) * 15;
  mesh.position.z = (Math.random() - 0.5) * 15;

  mesh.rotation.x = Math.random() * Math.PI;
  mesh.rotation.y = Math.random() * Math.PI;
  torusGroup.add(mesh);
}
console.timeEnd("Torus");
const randomScale = Math.random() + 0.3;
torusGroup.scale.set(randomScale, randomScale, randomScale);
scene.add(torusGroup);

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Controls
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
