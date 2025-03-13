'use strict';

var SideEffect = require('./SideEffect.js');
var medium = require('./medium.js');
var exports$1 = require('../../../../../../use-sidecar/dist/es2015/exports.js');

var SideCar = exports$1.exportSidecar(medium.effectCar, SideEffect.RemoveScrollSideCar);

module.exports = SideCar;
