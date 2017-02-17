'use strict';

module.exports = function add(app, controllers) {
  for (const controller of controllers) {
    if (typeof controller[0] === 'string') {
      app[controller[0]](...controller[1]);
    } else {
      add(app, controller);
    }
  }
};
