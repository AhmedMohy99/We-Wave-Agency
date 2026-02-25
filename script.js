// Language switch
function setLang(lang){
const htmlTag=document.getElementById("htmlTag");

if(lang==="ar"){
htmlTag.lang="ar";
htmlTag.dir="rtl";
}else{
htmlTag.lang="en";
htmlTag.dir="ltr";
}

document.querySelectorAll("[data-en]").forEach(el=>{
el.innerText=el.getAttribute("data-"+lang);
});
}

// Mobile menu
function toggleMenu(){
const nav=document.querySelector(".nav");
nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

// 3D Background only if exists
const container=document.getElementById("canvas-container");

if(container && typeof THREE !== "undefined"){
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
const renderer=new THREE.WebGLRenderer({alpha:true});
renderer.setSize(window.innerWidth,window.innerHeight);
container.appendChild(renderer.domElement);

const geometry=new THREE.TorusKnotGeometry(2,0.6,120,16);
const material=new THREE.MeshBasicMaterial({color:0xc6ff00,wireframe:true});
const mesh=new THREE.Mesh(geometry,material);
scene.add(mesh);
camera.position.z=6;

function animate(){
requestAnimationFrame(animate);
mesh.rotation.x+=0.01;
mesh.rotation.y+=0.01;
renderer.render(scene,camera);
}
animate();
}
