//obj and prop
var obj = {
    greet : 'Hello'
}

console.log(obj.greet);
console.log(obj['greet']);

// func
var arr = [];

arr.push(function() {
    console.log('Heelo world 1');
});

arr.push(function() {
    console.log('Heelo world 2');
});

arr.push(function() {
    console.log('Heelo world 3');
});

arr.forEach(function(item) {
    item();
});
