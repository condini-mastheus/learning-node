var obj = {
    name : 'Joa Doe',
    greet: function (param) {
        console.log(`Hello ${ this.name}`);
    }
}

obj.greet();
obj.greet.call({name: 'Jane Doe'}, 'A');
obj.greet.apply({name: 'Jane Doe'}, ['A']);
