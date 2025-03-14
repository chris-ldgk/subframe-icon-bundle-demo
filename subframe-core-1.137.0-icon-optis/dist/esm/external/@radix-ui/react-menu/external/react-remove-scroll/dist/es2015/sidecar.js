import { RemoveScrollSideCar } from './SideEffect.js';
import { effectCar } from './medium.js';
import { exportSidecar } from '../../../../../../use-sidecar/dist/es2015/exports.js';

var SideCar = exportSidecar(effectCar, RemoveScrollSideCar);

export { SideCar as default };
