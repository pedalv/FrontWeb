function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
document.body.innerHTML = greeter(user);
class Greeter {
    sayHello() {
        console.log("Hello" + name);
    }
}
function sortByName(a) {
    var result = a.slice(0);
    result.sort(function (x, y) {
        return x.name.localeCompare(y.name);
    });
    return result;
}
sortByName([]);
// node_modules/typescript/bin/tsc --target es6 greeter.ts 
