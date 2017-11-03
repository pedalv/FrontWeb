#Module patterns in ES5

## Function declaration
```bash
function(){  
  console.log('test');
}
```

## Immediately Invoked Function Expression (IIFE)
```bash
(function(){
  console.log('test');
})
// => returns function test(){ console.log('test') }

(function(){
  console.log('test');
})()
// => writes 'test' to the console and returns undefined
```
- (+) encapsulate code complexity inside IIFE so we don't have to understand what the IIFE code does
- (+) define variables inside the IIFE so they don't pollute the global scope (var statements inside the IIFE remain within the IIFE's closure)
- (-) they don't provide a mechanism for dependency management.

## Revealing Module pattern
```bash
// Expose module as global variable
var singleton = function(){

  // Inner logic
  function sayHello(){
    console.log('Hello');
  }

  // Expose API
  return {
    sayHello: sayHello
  }
}()

// Access module functionality
singleton.sayHello();  
// => Hello
```
- (+) With this construct, our anonymous function has its own evaluation environment or “closure”, and then we immediately evaluate it. This lets us hide variables from the parent (global) namespace.

- (+) What’s nice about this approach is that is that you can use local variables inside this function without accidentally overwriting existing global variables, yet still access the global variables.


## Instead of a singleton, a module can also expose a constructor function:
```bash
// Expose module as global variable
var Module = function(){

  // Inner logic
  function sayHello(){
    console.log('Hello');
  }

  // Expose API
  return {
    sayHello: sayHello
  }
}

var module = new Module();
module.sayHello();  
// => Hello
```
