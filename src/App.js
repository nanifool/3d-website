import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import logo from './kirby.jpg'


class App extends Component {
  componentDidMount() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    this.mount.appendChild(renderer.domElement);
    const pointLight = new THREE.PointLight(0xec93fa);
    pointLight.position.set(2, 2, 3);
    const ambientLight = new THREE.AmbientLight(0xffffff);
    // const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
    var geometry = new THREE.SphereGeometry(3, 32, 32);
    const kirbyImg = new THREE.TextureLoader().load(logo)
    var material = new THREE.MeshStandardMaterial({ map: kirbyImg });
    var sphere = new THREE.Mesh(geometry, material);
    const backgroundColor = new THREE.Color("rgb(255, 214, 247)")
    scene.background = backgroundColor;
    scene.add(sphere);
    scene.add(pointLight, ambientLight);
    // scene.add(light);
    camera.position.z = 20;
    var animate = function () {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      sphere.rotation.z += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }
  render() {
    return (
      <div ref={ref => (this.mount = ref)} />
    )
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;