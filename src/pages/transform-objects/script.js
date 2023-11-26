import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Main
const main = document.querySelector("main");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */

// Group
const group = new THREE.Group();

// Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

const mesh = new THREE.Mesh(geometry, material);
const otherMesh = new THREE.Mesh(geometry, material);
group.add(mesh);
group.add(otherMesh);
scene.add(group);

// Mesh Position
mesh.position.set(1.4, 0.4, -1);

// Mesh Scale
mesh.scale.set(2, 0.5, 0.5);

// Mesh Rotate
mesh.rotation.set(Math.PI * 0.25, Math.PI * 0.25, Math.PI * 0.25);

// Axes helper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
scene.add(camera);

// Camera Position
camera.position.set(1, 1, 4);

// Camera lookAt
camera.lookAt(group.position);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
