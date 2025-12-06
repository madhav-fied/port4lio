import * as THREE from 'three';



export class Cuboid{
    constructor(length = 5, breadth = 5, height = 5) {
        this.material = new THREE.MeshPhongMaterial({
            color: 0xFF0000,
            flatShading: true,
        });
        this.geometry = new THREE.BoxGeometry(length, breadth, height);
        this.box = new THREE.Mesh(this.geometry, this.material);
    }

    getBox() {
        return this.box
    }
}



