'use strict';

module.exports = (app, controllers) => {
  for (const controller of controllers) {
    app[controller[0]].apply(app, controller[1]);
  }
};
