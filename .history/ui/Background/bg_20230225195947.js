import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Create the Three.js scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Add a plane with a texture to the scene
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("https://i.imgur.com/7xm3LwI.jpg");
    const planeGeometry = new THREE.PlaneGeometry(50, 50);
    const planeMaterial = new THREE.MeshBasicMaterial({ map: texture });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    scene.add(plane);

    // Create the text geometry and material
    const textGeometry = new THREE.TextGeometry("CRIB", {
      font: new THREE.FontLoader().load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"),
      size: 2,
      height: 1,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.2,
      bevelSegments: 3,
    });
    const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

    // Create multiple rows of text meshes and add them to the scene
    const rows = 4;
    const spacing = 3;
    const textMeshes = [];
    for (let i = 0; i < rows; i++) {
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      textMesh.position.x = -4.5;
      textMesh.position.y = (i - (rows - 1) / 2) * spacing;
      textMesh.rotation.z = Math.PI / 2;
      scene.add(textMesh);
      textMeshes.push(textMesh);
    }

    // Set up the animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Move each row of text at a different speed
      const speeds = [0.1, 0.2, 0.3, 0.4];
      for (let i = 0; i < rows; i++) {
        textMeshes[i].position.z += speeds[i];
        if (textMeshes[i].position.z > 10) {
          textMeshes[i].position.z = -10;
        }
      }

      // Render the scene
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Background;
