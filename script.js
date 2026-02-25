// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Slide menu toggle
const menuBtn = document.getElementById("menuBtn");
const sideNav = document.getElementById("sideNav");
const navOverlay = document.getElementById("navOverlay");
const sideClose = document.getElementById("sideClose");

function openMenu(){
  if (!sideNav || !navOverlay || !menuBtn) return;
  sideNav.classList.add("open");
  navOverlay.classList.add("open");
  menuBtn.setAttribute("aria-expanded", "true");
}

function closeMenu(){
  if (!sideNav || !navOverlay || !menuBtn) return;
  sideNav.classList.remove("open");
  navOverlay.classList.remove("open");
  menuBtn.setAttribute("aria-expanded", "false");
}

if (menuBtn) menuBtn.addEventListener("click", openMenu);
if (sideClose) sideClose.addEventListener("click", closeMenu);
if (navOverlay) navOverlay.addEventListener("click", closeMenu);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

if (sideNav){
  sideNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", closeMenu);
  });
}

// 3D background ONLY on Home
const container = document.getElementById("canvas-container");

if (container && window.THREE) {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  const geometry = new THREE.TorusKnotGeometry(2, 0.6, 120, 16);
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

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

// Animate hero content (Home) if GSAP exists
if (window.gsap && document.querySelector(".hero-content")) {
  gsap.from(".hero-content", {
    y: 90,
    opacity: 0,
    duration: 1.3,
    ease: "power4.out"
  });
}
