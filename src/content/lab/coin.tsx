import { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export const meta = {
    "title": "Coin Flip",
    "date": "2026-05-01",
    "slug": "/lab/coin-flip",
};

function createTextTexture(text: string, color: string) {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 256, 256);
    ctx.fillStyle = '#271919';
    ctx.font = 'bold 160px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 128, 128);
    return new THREE.CanvasTexture(canvas);
}

export default function Coin() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const coinRef = useRef<THREE.Mesh | null>(null);
    const isFlippingRef = useRef(false);
    const flipRef = useRef({
        startTime: 0,
        duration: 1500,
        startRotationZ: 0,
        finalRotationZ: 0,
        maxHeight: 6,
    });

    const handleFlip = useCallback(() => {
        if (isFlippingRef.current || !coinRef.current) return;
        const numRotations = Math.floor(Math.random() * 6 + 6);
        flipRef.current.startRotationZ = coinRef.current.rotation.z;
        flipRef.current.finalRotationZ = coinRef.current.rotation.z + Math.PI * numRotations;
        flipRef.current.startTime = Date.now();
        isFlippingRef.current = true;
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x1C1A1A);

        const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
        camera.position.set(0, 8, 8);

        const renderer = new THREE.WebGLRenderer({ canvas });
        renderer.setPixelRatio(window.devicePixelRatio);

        scene.add(new THREE.AmbientLight(0x1D1515, 20));

        const coinGeometry = new THREE.CylinderGeometry(1.5, 1.5, 0.25, 512);
        const headsMaterial = new THREE.MeshStandardMaterial({ map: createTextTexture('H', '#ffd700'), metalness: 0.1, roughness: 0.9 });
        const tailsMaterial = new THREE.MeshStandardMaterial({ map: createTextTexture('T', '#ffd700'), metalness: 0.1, roughness: 0.9 });
        const edgeMaterial = new THREE.MeshStandardMaterial({ color: 0x000000, metalness: 0.1, roughness: 0.9 });

        const coin = new THREE.Mesh(coinGeometry, [edgeMaterial, headsMaterial, tailsMaterial]);
        coinRef.current = coin;
        scene.add(coin);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.target.set(0, 1, -2);
        controls.enableRotate = false;
        controls.enableZoom = false;
        controls.update();

        let rafId: number;

        const animate = () => {
            rafId = requestAnimationFrame(animate);

            const w = canvas.clientWidth;
            const h = canvas.clientHeight;
            if (canvas.width !== w || canvas.height !== h) {
                renderer.setSize(w, h, false);
                camera.aspect = w / h;
                camera.updateProjectionMatrix();
            }

            if (isFlippingRef.current) {
                const { startTime, duration, startRotationZ, finalRotationZ, maxHeight } = flipRef.current;
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                coin.rotation.z = startRotationZ + (finalRotationZ - startRotationZ) * eased;
                coin.position.y = maxHeight * Math.sin(progress * Math.PI);
                if (progress >= 1) {
                    isFlippingRef.current = false;
                    coin.position.y = 0;
                }
            }

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            cancelAnimationFrame(rafId);
            controls.dispose();
            renderer.dispose();
            coinGeometry.dispose();
            headsMaterial.map?.dispose();
            headsMaterial.dispose();
            tailsMaterial.map?.dispose();
            tailsMaterial.dispose();
            edgeMaterial.dispose();
            coinRef.current = null;
        };
    }, []);

    return (
        <div className="flex flex-col gap-2 items-center pt-12">
            <canvas ref={canvasRef} className="grow border border-black w-full block" />
            <button onClick={handleFlip} className="border border-gray-2 px-2 h-8 cursor-pointer">
                Flip!
            </button>
        </div>
    );
}
