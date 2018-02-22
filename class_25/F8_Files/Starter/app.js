var fs = require('fs');

// console.log(`${__dirname}/greet.txt`);

var greet = fs.readFileSync(`${__dirname}/greet.txt`, 'utf8');
console.log(greet);

var greet2 = fs.readFile(`${__dirname}/greet.txt`, 'utf8', function(err, data) {
    console.log(err);
    console.log(data);
});

console.log("Done!");
