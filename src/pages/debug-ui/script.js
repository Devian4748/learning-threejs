import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls";
import GUI from "lil-gui";
import gsap from "gsap";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// GUI
const gui = new GUI({
  width: 340,
  title: "Nice Debug UI",
  closeFolders: true,
});
const cubeGUI = gui.addFolder("Cube");

const debugObject = {
  color: "#746e91",
  spin: () => {},
  subdivision: 1,
};

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: debugObject.color });
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

window.addEventListener("keydown", (e) => {
  if (e.key === "h") {
    gui.show(gui._hidden);
  }
});

/**
 * DEBUG
 */

// mesh
cubeGUI.add(mesh, "visible");
cubeGUI.add(mesh.position, "y").min(-1).max(1).step(0.01);
cubeGUI.add(mesh.position, "x").min(-1).max(1).step(0.01);

// material
cubeGUI.add(material, "wireframe");
cubeGUI.addColor(debugObject, "color").onChange(() => {
  material.color.set(debugObject.color);
});

// animation - spin
debugObject.spin = () => {
  gsap.to(mesh.rotation, {
    y: mesh.rotation.y + Math.PI * 2,
    duration: 5,
  });
};
cubeGUI.add(debugObject, "spin");

// geometrics
cubeGUI
  .add(debugObject, "subdivision")
  .min(1)
  .max(10)
  .step(1)
  .onFinishChange(() => {
    mesh.geometry.dispose();
    mesh.geometry = new THREE.BoxGeometry(
      1,
      1,
      1,
      debugObject.subdivision,
      debugObject.subdivision,
      debugObject.subdivision
    );
  });
