import * as THREE from "./js/three.module.js";
import { STLLoader } from "./js/STLLoader.js";
import { OrbitControls } from "./js/OrbitControls.js";

let scene, camera, renderer, object;

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    10000
  );
  camera.position.z = 8;

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  scene.add(object);

  let control = new OrbitControls(camera, renderer.domElement);

  let light = new THREE.DirectionalLight(0xffffff);
  light.position.set(0, 0, 10);
  scene.add(light);

  let light2 = new THREE.DirectionalLight(0xffffff);
  light2.position.set(0, 0, -10);
  scene.add(light2);

  animate();
}

function animate() {
  requestAnimationFrame(animate);
  object.rotation.z += 0.0;
  renderer.render(scene, camera);
}

let loader = new STLLoader();
loader.load("../3dmodel/Greenhouse-2.stl", (model) => {
  object = new THREE.Mesh(
    model,
    new THREE.MeshPhongMaterial({
      color: 0x333333,
      specular: 0x111111,
      shininess: 30,
    }) // Azul
  );
  object.scale.set(0.1, 0.1, 0.1);
  object.position.set(1, -2, 0);
  object.rotation.x = -Math.PI / 2;
  init();
});
