const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("canvas-container").appendChild(renderer.domElement);

const geometry = new THREE.TorusKnotGeometry(2, 0.6, 100, 16);
const material = new THREE.MeshBasicMaterial({
    color: 0xc6ff00,
    wireframe: true
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

camera.position.z = 6;

function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();

gsap.from(".hero-content", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out"
});
