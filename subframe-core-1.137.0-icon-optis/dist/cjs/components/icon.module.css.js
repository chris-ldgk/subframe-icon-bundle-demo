'use strict';

var styleInject_es = require('../external/style-inject/dist/style-inject.es.js');

var css_248z = "/* HACK: NextJS does not always load stylesheets in a stable order; this ensures that no matter\n   which order these styles are loaded, this component has the lowest precedence. Thus this ensures adding a\n   Tailwind class will always override this style. */\n   @layer {\n    .icon-module_root__7C4BA {\n      flex: 0 0 auto;\n      display: inline-flex;\n      align-items: center;\n    }\n  }\n  ";
var styles = {"root":"icon-module_root__7C4BA"};
styleInject_es(css_248z,{"insertAt":"top"});

module.exports = styles;
