import * as THREE from "three";
import gsap from "gsap";
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

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Animations

gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 });

// Tick 1
// const tick = () => {
//   // Update objects
//   mesh.rotation.y += 0.02;
//   // Render
//   renderer.render(scene, camera);
//   window.requestAnimationFrame(tick);
// };

// Tick 2
// let time = Date.now();
// const tick = () => {
//   const currentTime = Date.now();
//   const deltaTime = currentTime - time;
//   time = currentTime;

//   // Update Objects
//   mesh.rotation.x += 0.001 * deltaTime;

//   // Render
//   renderer.render(scene, camera);

//   window.requestAnimationFrame(tick);
// };

// Tick 3
const clock = new THREE.Clock();
const tick = () => {
  // Update Objects
  const elapsedTime = clock.getElapsedTime();

  mesh.rotation.y = Math.cos(elapsedTime);
  mesh.rotation.x = Math.sin(elapsedTime);
  // camera.lookAt(mesh.position);

  // Render
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick();
