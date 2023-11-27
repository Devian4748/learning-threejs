import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Main
const main = document.querySelector("main");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

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

// Fullscreen

window.addEventListener("dblclick", () => {
  const fullscreenElement =
    document.fullscreenElement || document.webkitFullscreenElement;
  if (!fullscreenElement) {
    if (canvas.requestFullscreen) {
      canvas.requestFullscreen();
    } else if (canvas.requestWebkitFullscreen) {
      canvas.requestWebkitFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
});
