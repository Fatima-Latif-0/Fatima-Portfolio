import * as THREE from "./vendor/three.module.js";

const canvas = document.querySelector("#space-scene");
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x02040a, 0.035);
const camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1.8, 9);
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
const clock = new THREE.Clock();
const pointer = new THREE.Vector2();
const target = new THREE.Vector2();
const system = new THREE.Group();
scene.add(system);
const starCount = 1700;
const positions = new Float32Array(starCount * 3);
const colors = new Float32Array(starCount * 3);
const palette = [new THREE.Color("#76f7ff"), new THREE.Color("#f7fbff"), new THREE.Color("#ffca5f"), new THREE.Color("#ff6f91")];
for (let i = 0; i < starCount; i += 1) {
  const radius = THREE.MathUtils.randFloat(14, 52);
  const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
  const phi = Math.acos(THREE.MathUtils.randFloatSpread(2));
  const spin = THREE.MathUtils.randFloatSpread(7);
  const index = i * 3;
  positions[index] = radius * Math.sin(phi) * Math.cos(theta) + spin;
  positions[index + 1] = radius * Math.cos(phi) * 0.46;
  positions[index + 2] = radius * Math.sin(phi) * Math.sin(theta);
  const color = palette[Math.floor(Math.random() * palette.length)];
  colors[index] = color.r;
  colors[index + 1] = color.g;
  colors[index + 2] = color.b;
}
const starGeometry = new THREE.BufferGeometry();
starGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
starGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
const stars = new THREE.Points(starGeometry, new THREE.PointsMaterial({ size: 0.045, vertexColors: true, transparent: true, opacity: 0.92, depthWrite: false }));
system.add(stars);
const planetGeometry = new THREE.IcosahedronGeometry(1.42, 64);
const planetMaterial = new THREE.MeshStandardMaterial({ color: 0x172b4d, roughness: 0.58, metalness: 0.25, emissive: 0x07152b, emissiveIntensity: 0.75 });
const planet = new THREE.Mesh(planetGeometry, planetMaterial);
planet.position.set(4.2, -0.3, -1.2);
planet.rotation.set(0.4, 0.2, -0.1);
system.add(planet);
const ring = new THREE.Mesh(new THREE.TorusGeometry(2.15, 0.018, 12, 180), new THREE.MeshBasicMaterial({ color: 0x76f7ff, transparent: true, opacity: 0.62 }));
ring.position.copy(planet.position);
ring.rotation.set(1.17, 0.18, 0.64);
system.add(ring);
const debrisGroup = new THREE.Group();
const debrisMaterial = new THREE.MeshStandardMaterial({ color: 0xffca5f, roughness: 0.36, metalness: 0.55, emissive: 0x422009, emissiveIntensity: 0.45 });
for (let i = 0; i < 34; i += 1) {
  const shard = new THREE.Mesh(new THREE.TetrahedronGeometry(THREE.MathUtils.randFloat(0.025, 0.075), 0), debrisMaterial);
  const angle = (i / 34) * Math.PI * 2;
  const radius = THREE.MathUtils.randFloat(2.0, 2.7);
  shard.position.set(planet.position.x + Math.cos(angle) * radius, planet.position.y + THREE.MathUtils.randFloatSpread(0.28), planet.position.z + Math.sin(angle) * radius * 0.35);
  shard.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
  debrisGroup.add(shard);
}
system.add(debrisGroup);
const nebulaGeometry = new THREE.BufferGeometry();
const nebulaCount = 360;
const nebulaPositions = new Float32Array(nebulaCount * 3);
for (let i = 0; i < nebulaCount; i += 1) {
  const index = i * 3;
  nebulaPositions[index] = THREE.MathUtils.randFloatSpread(12);
  nebulaPositions[index + 1] = THREE.MathUtils.randFloatSpread(5) + 0.6;
  nebulaPositions[index + 2] = THREE.MathUtils.randFloat(-9, -3);
}
nebulaGeometry.setAttribute("position", new THREE.BufferAttribute(nebulaPositions, 3));
const nebula = new THREE.Points(nebulaGeometry, new THREE.PointsMaterial({ color: 0xff6f91, size: 0.13, transparent: true, opacity: 0.22, depthWrite: false, blending: THREE.AdditiveBlending }));
system.add(nebula);
const keyLight = new THREE.PointLight(0x76f7ff, 40, 18);
keyLight.position.set(-3, 4, 4);
scene.add(keyLight);
const warmLight = new THREE.PointLight(0xffca5f, 26, 18);
warmLight.position.set(5, -2, 4);
scene.add(warmLight);
scene.add(new THREE.AmbientLight(0x8aa8ff, 0.75));
const createOrbitLine = (radius, color, opacity, y = 0) => {
  const curve = new THREE.EllipseCurve(0, 0, radius, radius * 0.34, 0, Math.PI * 2);
  const points = curve.getPoints(160).map((point) => new THREE.Vector3(point.x, y, point.y - 1.2));
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({ color, transparent: true, opacity });
  const line = new THREE.Line(geometry, material);
  line.rotation.x = -0.34;
  return line;
};
const orbitA = createOrbitLine(4.7, 0x76f7ff, 0.22, -0.2);
const orbitB = createOrbitLine(6.2, 0xffca5f, 0.16, 0.5);
system.add(orbitA, orbitB);
function resize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
function onPointerMove(event) {
  target.x = (event.clientX / window.innerWidth - 0.5) * 2;
  target.y = (event.clientY / window.innerHeight - 0.5) * 2;
}
window.addEventListener("resize", resize);
window.addEventListener("pointermove", onPointerMove);
function animate() {
  const elapsed = clock.getElapsedTime();
  pointer.lerp(target, 0.045);
  stars.rotation.y = elapsed * 0.018;
  stars.rotation.x = Math.sin(elapsed * 0.12) * 0.035;
  nebula.rotation.z = elapsed * 0.01;
  planet.rotation.y = elapsed * 0.18;
  planet.rotation.x = 0.4 + Math.sin(elapsed * 0.24) * 0.04;
  ring.rotation.z = 0.64 + elapsed * 0.11;
  debrisGroup.rotation.y = elapsed * 0.28;
  orbitA.rotation.z = elapsed * 0.035;
  orbitB.rotation.z = -elapsed * 0.025;
  system.rotation.y = pointer.x * 0.1;
  system.rotation.x = -pointer.y * 0.045;
  camera.position.x = pointer.x * 0.34;
  camera.position.y = 1.8 - pointer.y * 0.18;
  camera.lookAt(0, 0.45, 0);
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();