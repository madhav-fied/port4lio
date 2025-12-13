import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { update } from 'three/examples/jsm/libs/tween.module.js';

const createScene = ({ background = 0x111111 } = {}) => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(background);
    return scene;
}
  
const createCamera = () => {
  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
  camera.position.set(0, 8, 8);
  return camera;
}
  
const createRenderer = (canvas) => {
  const renderer = new THREE.WebGLRenderer({canvas});
  renderer.setPixelRatio(window.devicePixelRatio);
  return renderer;
}
  
function resizeRenderer(renderer, camera, canvas) {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  if (canvas.width !== width || canvas.height !== height) {
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
}

const createLights = (scene) => {
  scene.add(
    new THREE.AmbientLight(0xffffff, 20),
  );
}

function createTextTexture(text, color) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 256, 256);
  ctx.fillStyle = '#28282B';
  ctx.font = 'bold 160px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 128, 128);
  
  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}


const canvas = document.getElementById("coin-flip");
const scene = createScene();
const camera = createCamera();
const renderer = createRenderer(canvas);

createLights(scene);


const coinGeometry = new THREE.CylinderGeometry(2, 2, 0.25, 512)

const headTexture = createTextTexture('H', '#ffd700');
const headsMaterial = new THREE.MeshStandardMaterial({
  map: headTexture,
  metalness: 0.8,
  roughness: 0.2,
})

const tailTexture = createTextTexture('T', '#ffd700');
const tailsMaterial = new THREE.MeshStandardMaterial({
  map: tailTexture,
  metalness: 0.8,
  roughness: 0.2,
})

const edgeMaterial = new THREE.MeshStandardMaterial({
  color: 0x28282b,
  metalness: 0.6,
  roughness: 0.3,
});

const coin = new THREE.Mesh(
  coinGeometry, 
  [edgeMaterial, headsMaterial, tailsMaterial]
);



const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 3, -1);

let isFlipping = false;
let flipStartTime = Date.now();
let flipDuration = 2000;
let numRotations = 0;
let startRotationZ = 0;
let finalRotationZ = 0;
let maxHeight = 6;


const flipButton = document.querySelector('#canvas-coin-flip')
flipButton.addEventListener('click', () => {
  if (isFlipping) return;

  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }
  numRotations = getRandomInt(10, 16);
  startRotationZ = coin.rotation.z;
  finalRotationZ = startRotationZ + (Math.PI * numRotations)
  flipStartTime = Date.now();
  isFlipping = true;
})

const doFlips = () => {
  if (!isFlipping) return;
  const elapsed = Date.now() - flipStartTime;
  const progress = Math.min(elapsed / flipDuration, 1);
  const eased = 1 - Math.pow(1 - progress, 3);
  coin.rotation.z = startRotationZ + (finalRotationZ - startRotationZ) * eased;
  coin.position.y = maxHeight * Math.sin(progress * Math.PI);

  if (progress >= 1) {
    isFlipping = false;
    coin.position.y = 0;
  }
}

function animate() {
  doFlips();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}



scene.add(coin);
controls.update()
requestAnimationFrame(animate);


