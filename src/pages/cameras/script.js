import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Main
const main = document.querySelector("main");

// Scene
const scene = new THREE.Scene();

// Axes Helper
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  wireframe: true,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Cursor
// const cursor = {
//   x: 0,
//   y: 0,
// };

// Sizes
const sizes = {
  width: window.outerWidth,
  height: window.outerHeight,
};
const aspectRatio = sizes.width / sizes.height;
/**
 * Cameras
 */

// PerspectiveCamera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);

// OrthographicCamera
// const camera = new THREE.OrthographicCamera(
//   -1 * aspectRatio,
//   1 * aspectRatio,
//   1,
//   -1,
//   1,
//   100
// );
camera.position.z = 3;
scene.add(camera);

// Control
const control = new OrbitControls(camera, canvas);
control.enableDamping = true;

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);

const tick = () => {
  // Update Objects

  // Update Camera
  // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 5;
  // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 5;
  // camera.position.y = cursor.y * 5;
  // camera.lookAt(mesh.position);

  // Update Control
  control.update();

  // Render
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();

/**
 * Window Event Handler
 */

// Resize Event Handler
window.addEventListener("resize", () => {
  sizes.width = window.outerWidth;
  sizes.height = window.outerHeight;

  // When using perspective camera
  camera.aspect = sizes.width / sizes.height;

  // When using orthographic camera
  // const newAspectRatio = sizes.width / sizes.height;
  // camera.left = -1 * newAspectRatio;
  // camera.right = 1 * newAspectRatio;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});

// Mousemove Event Handler
// window.addEventListener("mousemove", (event) => {
//   cursor.x = -(event.clientX / sizes.width - 0.5);
//   cursor.y = event.clientY / sizes.height - 0.5;
// });
