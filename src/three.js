import * as THREE from 'three';
import { Cuboid } from './cuboid'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';




const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 100
const renderer = new THREE.WebGLRenderer();
const controls = new OrbitControls(camera, renderer.domElement);
const light = new THREE.AmbientLight(0xFFFFFF, 1);

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
controls.update();
controls.addEventListener('change', render)


let cuboid = new Cuboid(5, 5, 5).getBox()
let nextCuboid = new Cuboid(10, 5, 5).getBox()
nextCuboid.position.x = 10;
cuboid.add(nextCuboid);


controls.update()








function includeInScene(obj) {
    scene.add(obj)
}


function render() {
    renderer.render(scene, camera)
}


includeInScene(light);
includeInScene(cuboid);
render()