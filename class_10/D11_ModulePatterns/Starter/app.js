var greet = require('./greet1')
greet();

var greet2 = require('./greet2').greet;
greet2();
//greet2.greet();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = "AAAAAAAAAAAAAAAAAAAAA";

var greetb3 = require('./greet3');
greetb3.greet();

var Greet4 = require('./greet4');
var greetr = new Greet4();
greetr.greet();

var greet5 = require('./greet5').greet;
greet5();
