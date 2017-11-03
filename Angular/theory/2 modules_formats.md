# Module formats
> Before EcmaScript 6 or ES2015, JavaScript did not have an official syntax to define modules. 

> Therefore, smart developers came up with various formats to define modules in JavaScript.
- Some of the most widely adapted and well known formats are:

- Asynchronous Module Definition (AMD)
```bash
//Calling define with a dependency array and a factory function
define(['dep1', 'dep2'], function (dep1, dep2) {

    //Define the module value by returning a value.
    return function () {};
});
```

- CommonJS
```bash
var dep1 = require('./dep1');  
var dep2 = require('./dep2');

module.exports = function(){  
  // ...
}
```

- Other exemple:
```bash
//idoaboutmathcalculate.js
let indexjscannotseeme = "great!"; 
let plusTwoNumber= (a,b)=>{ 
   return a+b;
}  
module.exports = plusTwoNumber;

//index.js
const plus2num = require('./idoaboutmathcalculate');
console.log(plus2num(2,5)); //7
```

- Universal Module Definition (UMD)
> The UMD format can be used both in the browser and in Node.js.

```bash
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
      define(['b'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('b'));
  } else {
    // Browser globals (root is window)
    root.returnExports = factory(root.b);
  }
}(this, function (b) {
  //use b in some fashion.

  // Just return a value to define the module export.
  // This example returns an object, but the module
  // can return a function as the exported value.
  return {};
}));
```

- System.register
> The System.register format was designed to support the ES6 module syntax in ES5:

```bash
import { p as q } from './dep';

var s = 'local';

export function func() {  
  return q;
}

export class C {  
}
```

- ES6 module format
> As of ES6, JavaScript also supports a native module format.

> It uses an export token to export a module's public API:

```bash
// lib.js

// Export the function
export function sayHello(){  
  console.log('Hello');
}

// Do not export the function
function somePrivateFunction(){  
  // ...
}

// and an import token to import parts that a module exports:
// index.js
// case 1
import { sayHello } from './lib';

sayHello();  
// => Hello


// case 2: We can even give imports an alias using as:
import { sayHello as say } from './lib';

say();  
// => Hello

//case 3: or load an entire module at once:
import * as lib from './lib';

lib.sayHello();  
// => Hello
```

- The format also supports default exports:
```bash
// lib.js

// Export default function
export default function sayHello(){  
  console.log('Hello');
}

// Export non-default function
export function sayGoodbye(){  
  console.log('Goodbye');
}

// case 1: which you can import like this:
import sayHello, { sayGoodbye } from './lib';

sayHello();  
// => Hello

sayGoodbye();  
// => Goodbye

// case 2: You can export not only functions, but anything you like:
// Export simple value
export const apiUrl = '...';

// Export object
export const settings = {  
  debug: true
}
```

- Note:
> Unfortunately, the native module format is not yet supported by all browsers.

> We can already use the ES6 module format today, but we need a transpiler like Babel to transpile our code to an ES5 module format such as AMD or CommonJS before we can actually run our code in the browser.


- Other exemple:
> CommonJS 

```bash
//idoaboutmathcalculate.js
let indexjscannotseeme = "great!"; 
let plusTwoNumber= (a,b)=>{ 
   return a+b;
}  
module.exports = plusTwoNumber;

//index.js
const plus2num = require('./idoaboutmathcalculate');
console.log(plus2num(2,5)); //7
```
> ES6 module format

```bash
//idoaboutmathcalculate.js
export default const plusTwoNumber= (a,b)=>{ 
   return a+b;
}

//index.js
import plus2num from './idoaboutmathcalculate';
console.log(plus2num(2,5)); //7
```
