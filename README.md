[![Dependency Status](https://david-dm.org/dnode/dcontrollers.svg)](https://david-dm.org/dnode/dcontrollers)
[![devDependency Status](https://david-dm.org/dnode/dcontrollers/dev-status.svg)](https://david-dm.org/dnode/dcontrollers#info=devDependencies)

# Example
```javascript
require('dcontrollers')(app, [
  ['get', ['/', (req, res) => {
    res.send();
  }]]
]);
```
