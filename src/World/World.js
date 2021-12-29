import { createCamera } from './../components/camera.js';
import { createCube } from './../components/cube.js';
import { createScene } from './../components/scene.js';
import { createLights } from './../components/lights.js';

import { createRenderer } from './../systems/renderer.js';
import { Resizer } from './../systems/Resizer.js';


// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;

class World {
  // 1. Create an instance of the World app
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);

    const cubeNegativo = createCube(-2, 0.1, 0);
    cubeNegativo.scale.y = -1;
    const cubePositivo = createCube(2, 0.1, 0);
    //cubePositivo.add(cubePositivo);
    const light = createLights();

    scene.add(cubeNegativo, cubePositivo, light);
    //scene.add(cubePositivo);

    const resizer = new Resizer(container, camera, renderer);
  }

  // 2. Render the scene
  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }
}

export { World };