[![Dependency Status](https://david-dm.org/dnode/dcontrollers/status.svg)](https://david-dm.org/dnode/dcontrollers)
[![devDependency Status](https://david-dm.org/dnode/dcontrollers/dev-status.svg)](https://david-dm.org/dnode/dcontrollers?type=dev)

# Installation

`npm i --save dcontrollers`


# Initialisation

```
require('dcontrollers')(app, [
  ['get', ['/', (req, res) => {
    res.send();
  }]]
]);
```
