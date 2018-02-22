function greet(greetCallback) {
    console.log('Hello!');
    var data = {
        name : 'Tobias Maguire'
    };
    greetCallback(data);
}

greet(function(data) {
    console.log('Call backing greting');
});

greet(function(data) {
    console.log('Callbacking greting 2');
    console.log(data.name);
});
