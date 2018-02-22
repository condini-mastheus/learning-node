// Your Javascript Code Goes Here

function greet() {
    console.log('Hi');
}

greet();

//functions are first-class

function logGretting(fn) {
    fn();
}

logGretting(greet);

// function expression
var greetMe = function() {
    console.log('Hi Me');
}
greetMe();

// it's firt-class
logGretting(greetMe)
