import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const scene = new THREE.Scene()

// This matches aspect ratio of the renderer
const camera = new THREE.PerspectiveCamera(75, 200/200, 0.1, 1000)
camera.position.z = 1.5

// Make sure your aspect ratio here matches the renederer aspect ratio
const canvas = document.getElementById('canvas') as HTMLCanvasElement 
// THIS here is TypeScript because it is the first time we have had to declare the type. 

const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setSize(200 , 200)

// document.body.appendChild(renderer.domElement)

// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight
//   camera.updateProjectionMatrix()
//   renderer.setSize(window.innerWidth, window.innerHeight)
// })

new OrbitControls(camera, renderer.domElement)

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshNormalMaterial({ wireframe: true })

const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

function animate() {
  requestAnimationFrame(animate)

  renderer.render(scene, camera)
}

animate()