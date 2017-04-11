'use strict';

module.exports = function add(app, controllers) {
  for (const controller of controllers) {
    if (typeof controller[0] === 'string') {
      const handle = controller[1][controller[1].length - 1];
      controller[1][controller[1].length - 1] = async (req, res) => {
        try {
          await handle(req, res);
        } catch (e) {
          res.sendStatus(e.status || 500);
        }
      };
      app[controller[0]](...controller[1]);
    } else {
      add(app, controller);
    }
  }
};
