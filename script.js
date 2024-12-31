import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/110/three.module.js';

// Setup Scene
const canvas = document.querySelector('#laptop-model');
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
camera.position.set(0, 2, 5);

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(canvas.clientWidth, canvas.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Laptop Base
const baseGeometry = new THREE.BoxGeometry(3, 0.1, 2);
const baseMaterial = new THREE.MeshStandardMaterial({ color: 0x555555, metalness: 0.8, roughness: 0.4 });
const laptopBase = new THREE.Mesh(baseGeometry, baseMaterial);
laptopBase.position.y = 0;
scene.add(laptopBase);

// Laptop Screen
const screenGeometry = new THREE.BoxGeometry(3, 1.8, 0.1);
const screenMaterial = new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.9, roughness: 0.5 });
const laptopScreen = new THREE.Mesh(screenGeometry, screenMaterial);
laptopScreen.position.y = 1.0;
laptopScreen.position.z = -1;
laptopScreen.rotation.x = -Math.PI / 4;
scene.add(laptopScreen);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Animation Loop
function animate() {
  requestAnimationFrame(animate);

  // Add subtle rotation for interaction
  laptopScreen.rotation.y += 0.005;
  laptopBase.rotation.y += 0.005;

  renderer.render(scene, camera);
}
animate();

// Handle Resizing
window.addEventListener('resize', () => {
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
});
