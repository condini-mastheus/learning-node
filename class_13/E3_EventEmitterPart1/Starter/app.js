var Emitter = require('./Emitter');

var emitter = new Emitter();

emitter.on('greet', function() {
    console.log('This event fired');
});

emitter.on('greet', function() {
    console.log('A gretting ocurred!');
});

console.log('Hello');
emitter.emit('greet')
