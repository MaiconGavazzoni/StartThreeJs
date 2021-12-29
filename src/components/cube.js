import { BoxBufferGeometry, Mesh, MeshStandardMaterial } from './../../vendor/three/build/three.module.js';

function createCube(X, Y , Z) {
  // create a geometry
  const geometry = new BoxBufferGeometry(2, 2, 2);

  // create a default (white) Basic material
  const material = new MeshStandardMaterial({ color: 'purple' });

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

   cube.position.x = X; 
   cube.position.y = Y;
   cube.position.z = Z;

  // equivalent to:
  //cube.position.set(-0.5, 0.1, 10);

  // cube.scale.x = 1;
  // cube.scale.y = 1;
  // cube.scale.z = 1;

  // equivalent to:
  //cube.scale.set(1.25, 0.25, 0.5);



  cube.rotation.set(-0.5, -0.0, 0.0);
  // cube.rotation.x = MathUtils.degToRad(-60);
  // cube.rotation.y = MathUtils.degToRad(-45);
  // cube.rotation.z = MathUtils.degToRad(60);

  return cube;
}

export { createCube };