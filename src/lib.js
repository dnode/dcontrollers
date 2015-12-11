'use strict';

module.exports = (app, controllers) => {
  for (let controller of controllers) {
    app[controller[0]].apply(app, controller[1]);
  }
};
