// Set year in footer (all pages)
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile menu toggle (all pages)
const menuBtn = document.getElementById("menuBtn");
const siteNav = document.getElementById("siteNav");

if (menuBtn && siteNav) {
  menuBtn.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close menu after clicking any link
  siteNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      siteNav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// 3D background (ONLY runs on Home if canvas exists)
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

// Animate hero text only if exists and GSAP loaded (Home)
if (window.gsap && document.querySelector(".hero-content")) {
  gsap.from(".hero-content", {
    y: 90,
    opacity: 0,
    duration: 1.3,
    ease: "power4.out"
  });
}
