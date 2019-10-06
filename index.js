console.log("Variable a is", a);
b();
console.log("Variable c is", c);
c();

var a = "Hello World";

function b() {
  console.log("Welcome from func b");
}

var c = function() {
  console.log("Welcome from func c");
}