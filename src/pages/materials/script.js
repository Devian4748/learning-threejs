import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls";
import GUI from "lil-gui";
import { RGBELoader } from "three/addons/loaders/RGBELoader";

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

// door
const doorColorTexture = textureLoader.load(
  "/learning-threejs/textures/door/color.jpg"
);

const doorAlphaTexture = textureLoader.load(
  "/learning-threejs/textures/door/alpha.jpg"
);

const doorAmbientOcclusionTexture = textureLoader.load(
  "/learning-threejs/textures/door/ambientOcclusion.jpg"
);

const doorHeightTexture = textureLoader.load(
  "/learning-threejs/textures/door/height.jpg"
);

const doorMetalnessTexture = textureLoader.load(
  "/learning-threejs/textures/door/metalness.jpg"
);

const doorNormalTexture = textureLoader.load(
  "/learning-threejs/textures/door/normal.jpg"
);

const doorRoughnessTexture = textureLoader.load(
  "/learning-threejs/textures/door/roughness.jpg"
);

// gradient
const gradients3Texture = textureLoader.load(
  "/learning-threejs/textures/gradients/3.jpg"
);

const gradients5Texture = textureLoader.load(
  "/learning-threejs/textures/gradients/5.jpg"
);

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

doorColorTexture.colorSpace = THREE.SRGBColorSpace;
doorAlphaTexture.colorSpace = THREE.SRGBColorSpace;
doorAmbientOcclusionTexture.colorSpace = THREE.SRGBColorSpace;
doorHeightTexture.colorSpace = THREE.SRGBColorSpace;
doorMetalnessTexture.colorSpace = THREE.SRGBColorSpace;
doorNormalTexture.colorSpace = THREE.SRGBColorSpace;
doorRoughnessTexture.colorSpace = THREE.SRGBColorSpace;
gradients3Texture.colorSpace = THREE.SRGBColorSpace;
gradients5Texture.colorSpace = THREE.SRGBColorSpace;
matcaps1Texture.colorSpace = THREE.SRGBColorSpace;
matcaps2Texture.colorSpace = THREE.SRGBColorSpace;
matcaps3Texture.colorSpace = THREE.SRGBColorSpace;
matcaps4Texture.colorSpace = THREE.SRGBColorSpace;
matcaps5Texture.colorSpace = THREE.SRGBColorSpace;
matcaps6Texture.colorSpace = THREE.SRGBColorSpace;
matcaps7Texture.colorSpace = THREE.SRGBColorSpace;
matcaps8Texture.colorSpace = THREE.SRGBColorSpace;

gradients3Texture.magFilter = THREE.NearestFilter;
gradients5Texture.magFilter = THREE.NearestFilter;

gradients3Texture.generateMipmaps = false;
gradients5Texture.generateMipmaps = false;

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Main
const main = document.querySelector("main");

// Scene
const scene = new THREE.Scene();

// Environment Map
const rgbeRoader = new RGBELoader();
rgbeRoader.load(
  "/learning-threejs/textures/environmentMap/2k.hdr",
  (environmentMap) => {
    environmentMap.mapping = THREE.EquirectangularReflectionMapping;
    scene.background = environmentMap;
    scene.environment = environmentMap;
  }
);
// Light
const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);

const pointLight = new THREE.PointLight(0xffffff, 30);
pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 4;
scene.add(pointLight);

/**
 * Objects
 */

// MeshBasicMaterial
// const material = new THREE.MeshBasicMaterial();
// material.map = doorColorTexture;
// material.transparent = true;
// material.alphaMap = doorAlphaTexture;
// material.opacity = 0.2;

// MeshNormalMaterial
// const material = new THREE.MeshNormalMaterial();
// material.flatShading = true;

// MeshMatcapMaterial
// const material = new THREE.MeshMatcapMaterial();
// material.matcap = matcaps1Texture;

// MeshDepthMaterial
// const material = new THREE.MeshDepthMaterial();

// MeshLambertMaterial
// const material = new THREE.MeshLambertMaterial();

// MeshPhongMaterial
// const material = new THREE.MeshPhongMaterial();
// material.shininess = 100;
// material.specular = new THREE.Color(0x1188ff);

// MeshToonMaterial
// const material = new THREE.MeshToonMaterial();
// material.gradientMap = gradients3Texture;
// material.gradientMap.magFilter = THREE.NearestFilter;
// material.gradientMap.generateMipmaps = false;

// MeshStandardMaterial
// const material = new THREE.MeshStandardMaterial();
// material.roughness = 0.5;
// material.metalness = 0.5;

const material = new THREE.MeshPhysicalMaterial();
material.roughness = 0;
material.metalness = 0;
material.transmission = 0.9;
material.iridescence = 1;

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 64, 64),
  material.clone()
);
sphere.position.x = -1.5;
const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(1, 1, 100, 100),
  material.clone()
);
plane.material.side = THREE.DoubleSide;
const torus = new THREE.Mesh(
  new THREE.TorusGeometry(0.3, 0.2, 64, 64),
  material.clone()
);
torus.position.x = 1.5;
scene.add(sphere, plane, torus);

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
const clock = new THREE.Clock();
const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  // Update Objects
  sphere.rotation.y = 0.1 * elapsedTime;
  plane.rotation.y = 0.1 * elapsedTime;
  torus.rotation.y = 0.1 * elapsedTime;
  sphere.rotation.x = -0.15 * elapsedTime;
  plane.rotation.x = -0.15 * elapsedTime;
  torus.rotation.x = -0.15 * elapsedTime;

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

// DEBUG
const gui = new GUI();

// Ambient Light
gui.add(light, "visible").name("light");

// Point Light
const pointLightGUI = gui.addFolder("point light");
pointLightGUI.add(pointLight.position, "x").min(-5).max(5).step(1);
pointLightGUI.add(pointLight.position, "y").min(-5).max(5).step(1);
pointLightGUI.add(pointLight.position, "z").min(-5).max(5).step(1);
pointLightGUI.add(pointLight, "intensity").min(1).max(100).step(1);
pointLightGUI.add(pointLight, "visible");

const debugObject = {};

// Material
const materialGUI = gui.addFolder("material");
const basicMaterial = new THREE.MeshBasicMaterial();
const normalMaterial = new THREE.MeshNormalMaterial();
const matcapMaterial = new THREE.MeshMatcapMaterial();
const depthMaterial = new THREE.MeshDepthMaterial();
const lamberMaterial = new THREE.MeshLambertMaterial();
const phongMaterial = new THREE.MeshPhongMaterial();
const toonMaterial = new THREE.MeshToonMaterial();
const standardMaterial = new THREE.MeshStandardMaterial();
const physicalMaterial = new THREE.MeshPhysicalMaterial();

standardMaterial.roughness = 0.5;
standardMaterial.metalness = 0.5;
standardMaterial.displacementScale = 0.071;

physicalMaterial.roughness = 0.5;
physicalMaterial.metalness = 0.5;
physicalMaterial.displacementScale = 0.071;
physicalMaterial.sheenColor.set(1, 1, 1);
physicalMaterial.iridescenceThicknessRange = [100, 800];

const commonChangeMaterial = (material) => {
  sphere.material.dispose();
  plane.material.dispose();
  torus.material.dispose();

  sphere.material = material;
  plane.material = material;
  torus.material = material;
};
const commonChangeMaterialTexture = (material, texture, textureProperty) => {
  commonChangeMaterial(material);

  sphere.material[textureProperty] = texture;
  plane.material[textureProperty] = texture;
  torus.material[textureProperty] = texture;
};
debugObject.changePhongMaterial = () => {
  commonChangeMaterial(phongMaterial);
};
debugObject.changeBasicMaterial = () => {
  commonChangeMaterial(basicMaterial);
};
debugObject.changeNormalMaterial = () => {
  commonChangeMaterial(normalMaterial);
};
debugObject.changeMatcapMaterial = () => {
  commonChangeMaterial(matcapMaterial);
};
debugObject.changeDepthMaterial = () => {
  commonChangeMaterial(depthMaterial);
};
debugObject.changeLamberMaterial = () => {
  commonChangeMaterial(lamberMaterial);
};

debugObject.changeToonMaterial = () => {
  commonChangeMaterial(toonMaterial);
};
debugObject.changeStandardMaterial = () => {
  commonChangeMaterial(standardMaterial);
};
debugObject.changePhysicalMaterial = () => {
  commonChangeMaterial(physicalMaterial);
};

materialGUI.add(debugObject, "changePhongMaterial").name("MeshPhongMaterial");
materialGUI.add(debugObject, "changeBasicMaterial").name("MeshBasicMaterial");
materialGUI.add(debugObject, "changeNormalMaterial").name("MeshNormalMaterial");
materialGUI.add(debugObject, "changeMatcapMaterial").name("MeshMatcapMaterial");
materialGUI.add(debugObject, "changeDepthMaterial").name("MeshDepthMaterial");
materialGUI.add(debugObject, "changeLamberMaterial").name("MeshLamberMaterial");
materialGUI.add(debugObject, "changeToonMaterial").name("MeshToonMaterial");
materialGUI
  .add(debugObject, "changeStandardMaterial")
  .name("MeshStandardMaterial");
materialGUI
  .add(debugObject, "changePhysicalMaterial")
  .name("MeshPhysicalMaterial");

// Matcap Material
const matcapGUI = gui.addFolder("matcap material");

debugObject.changeMatcapTexture1 = () => {
  commonChangeMaterialTexture(matcapMaterial, matcaps1Texture, "matcap");
};
debugObject.changeMatcapTexture2 = () => {
  commonChangeMaterialTexture(matcapMaterial, matcaps2Texture, "matcap");
};
debugObject.changeMatcapTexture3 = () => {
  commonChangeMaterialTexture(matcapMaterial, matcaps3Texture, "matcap");
};
debugObject.changeMatcapTexture4 = () => {
  commonChangeMaterialTexture(matcapMaterial, matcaps4Texture, "matcap");
};
debugObject.changeMatcapTexture5 = () => {
  commonChangeMaterialTexture(matcapMaterial, matcaps5Texture, "matcap");
};
debugObject.changeMatcapTexture6 = () => {
  commonChangeMaterialTexture(matcapMaterial, matcaps6Texture, "matcap");
};
debugObject.changeMatcapTexture7 = () => {
  commonChangeMaterialTexture(matcapMaterial, matcaps7Texture, "matcap");
};
debugObject.changeMatcapTexture8 = () => {
  commonChangeMaterialTexture(matcapMaterial, matcaps8Texture, "matcap");
};
matcapGUI.add(debugObject, "changeMatcapTexture1").name("matcap1");
matcapGUI.add(debugObject, "changeMatcapTexture2").name("matcap2");
matcapGUI.add(debugObject, "changeMatcapTexture3").name("matcap3");
matcapGUI.add(debugObject, "changeMatcapTexture4").name("matcap4");
matcapGUI.add(debugObject, "changeMatcapTexture5").name("matcap5");
matcapGUI.add(debugObject, "changeMatcapTexture6").name("matcap6");
matcapGUI.add(debugObject, "changeMatcapTexture7").name("matcap7");
matcapGUI.add(debugObject, "changeMatcapTexture8").name("matcap8");

// Phong Material
const phongGUI = gui.addFolder("phong material");
phongGUI.add(phongMaterial, "shininess").min(0).max(100).step(1);
phongGUI.addColor(phongMaterial, "specular").onChange((changedColor) => {
  phongMaterial.specular.set(changedColor);
});

// Gradient Material
const toonGUI = gui.addFolder("toon material");
debugObject.changeGradientTexture3 = () => {
  commonChangeMaterialTexture(toonMaterial, gradients3Texture, "gradientMap");
};
debugObject.changeGradientTexture5 = () => {
  commonChangeMaterialTexture(toonMaterial, gradients5Texture, "gradientMap");
};
toonGUI.add(debugObject, "changeGradientTexture3").name("gradient3");
toonGUI.add(debugObject, "changeGradientTexture5").name("gradient5");

// Standard Material
const standardGUI = gui.addFolder("standard material");
debugObject.changeStandardDoorColorTexture = () => {
  commonChangeMaterialTexture(standardMaterial, doorColorTexture, "map");
};
debugObject.changeStandardDoorAmbientOcculationTexture = () => {
  commonChangeMaterialTexture(
    standardMaterial,
    doorAmbientOcclusionTexture,
    "aoMap"
  );
};
debugObject.changeStandardDoorHeightTexture = () => {
  commonChangeMaterialTexture(
    standardMaterial,
    doorHeightTexture,
    "displacementMap"
  );
};
debugObject.changeStandardDoorMetalnessTexture = () => {
  commonChangeMaterialTexture(
    standardMaterial,
    doorMetalnessTexture,
    "metalnessMap"
  );
};
debugObject.changeStandardDoorRoughnessTexture = () => {
  commonChangeMaterialTexture(
    standardMaterial,
    doorRoughnessTexture,
    "roughnessMap"
  );
};
debugObject.changeStandardDoorNormalTexture = () => {
  commonChangeMaterialTexture(standardMaterial, doorNormalTexture, "normalMap");
};
debugObject.changeStandardDoorAlphaTexture = () => {
  commonChangeMaterialTexture(standardMaterial, doorAlphaTexture, "alphaMap");
  standardMaterial.transparent = true;
};
standardGUI.add(standardMaterial, "metalness").min(0).max(1).step(0.01);
standardGUI.add(standardMaterial, "roughness").min(0).max(1).step(0.01);
standardGUI
  .add(debugObject, "changeStandardDoorColorTexture")
  .name("door color");
standardGUI
  .add(debugObject, "changeStandardDoorAmbientOcculationTexture")
  .name("door ambient occulation");
standardGUI
  .add(debugObject, "changeStandardDoorHeightTexture")
  .name("door height");
standardGUI
  .add(standardMaterial, "displacementScale")
  .min(0)
  .max(1)
  .step(0.001);
standardGUI
  .add(debugObject, "changeStandardDoorMetalnessTexture")
  .name("door metalness");
standardGUI
  .add(debugObject, "changeStandardDoorRoughnessTexture")
  .name("door roughness");
standardGUI
  .add(debugObject, "changeStandardDoorNormalTexture")
  .name("door normal");
standardGUI
  .add(debugObject, "changeStandardDoorAlphaTexture")
  .name("door alpha");
standardGUI.add(standardMaterial.normalScale, "x").min(0).max(1).step(0.01);
standardGUI.add(standardMaterial.normalScale, "y").min(0).max(1).step(0.01);

// Physical Material
const physicalGUI = gui.addFolder("physical material");
debugObject.changePhysicalDoorColorTexture = () => {
  commonChangeMaterialTexture(physicalMaterial, doorColorTexture, "map");
};
debugObject.changePhysicalDoorAmbientOcculationTexture = () => {
  commonChangeMaterialTexture(
    physicalMaterial,
    doorAmbientOcclusionTexture,
    "aoMap"
  );
};
debugObject.changePhysicalDoorHeightTexture = () => {
  commonChangeMaterialTexture(
    physicalMaterial,
    doorHeightTexture,
    "displacementMap"
  );
};
debugObject.changePhysicalDoorMetalnessTexture = () => {
  commonChangeMaterialTexture(
    physicalMaterial,
    doorMetalnessTexture,
    "metalnessMap"
  );
};
debugObject.changePhysicalDoorRoughnessTexture = () => {
  commonChangeMaterialTexture(
    physicalMaterial,
    doorRoughnessTexture,
    "roughnessMap"
  );
};
debugObject.changePhysicalDoorNormalTexture = () => {
  commonChangeMaterialTexture(physicalMaterial, doorNormalTexture, "normalMap");
};
debugObject.changePhysicalDoorAlphaTexture = () => {
  commonChangeMaterialTexture(physicalMaterial, doorAlphaTexture, "alphaMap");
  physicalMaterial.transparent = true;
};
physicalGUI.add(physicalMaterial, "metalness").min(0).max(1).step(0.01);
physicalGUI.add(physicalMaterial, "roughness").min(0).max(1).step(0.01);
physicalGUI
  .add(debugObject, "changePhysicalDoorColorTexture")
  .name("door color");
physicalGUI
  .add(debugObject, "changePhysicalDoorAmbientOcculationTexture")
  .name("door ambient occulation");
physicalGUI
  .add(debugObject, "changePhysicalDoorHeightTexture")
  .name("door height");
physicalGUI
  .add(physicalMaterial, "displacementScale")
  .min(0)
  .max(1)
  .step(0.001);
physicalGUI
  .add(debugObject, "changePhysicalDoorMetalnessTexture")
  .name("door metalness");
physicalGUI
  .add(debugObject, "changePhysicalDoorRoughnessTexture")
  .name("door roughness");
physicalGUI
  .add(debugObject, "changePhysicalDoorNormalTexture")
  .name("door normal");
physicalGUI
  .add(debugObject, "changePhysicalDoorAlphaTexture")
  .name("door alpha");
physicalGUI.add(physicalMaterial.normalScale, "x").min(0).max(1).step(0.01);
physicalGUI.add(physicalMaterial.normalScale, "y").min(0).max(1).step(0.01);
physicalGUI.add(physicalMaterial, "clearcoat").min(0).max(1).step(0.01);
physicalGUI
  .add(physicalMaterial, "clearcoatRoughness")
  .min(0)
  .max(1)
  .step(0.01);
physicalGUI.add(physicalMaterial, "sheen").min(0).max(1).step(0.01);
physicalGUI.add(physicalMaterial, "sheenRoughness").min(0).max(1).step(0.01);

physicalGUI.add(physicalMaterial, "iridescence").min(0).max(1).step(0.01);
physicalGUI.add(physicalMaterial, "iridescenceIOR").min(0).max(2.33).step(0.01);
physicalGUI
  .add(physicalMaterial.iridescenceThicknessRange, "1")
  .min(100)
  .max(800)
  .step(1);
physicalGUI.add(physicalMaterial, "transmission").min(0).max(1).step(0.01);
physicalGUI.add(physicalMaterial, "ior").min(0).max(2.33).step(0.01);
physicalGUI.add(physicalMaterial, "thickness").min(0).max(1).step(0.01);
