'use strict';

const dhandler = require('dhandler');

module.exports = function add(app, controllers) {
  for (const controller of controllers) {
    if (typeof controller[0] === 'string') {
      controller[1] = controller[1].map((value, index) => {
        if (index === 0) {
          return value;
        }
        if (Array.isArray(value)) {
          return value.map(middleware => dhandler(middleware));
        }
        return dhandler(value);
      });
      app[controller[0]](...controller[1]);
    } else {
      add(app, controller);
    }
  }
};
