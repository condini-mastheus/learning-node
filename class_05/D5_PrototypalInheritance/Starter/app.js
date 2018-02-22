// Your Javascript Code Goes Here

function Person(firstname, lastname) {
    this.firstname  = firstname;
    this.lastname   = lastname;
}


Person.prototype.greet = function () {
    console.log('Olá, ' + this.firstname + ' ' + this.lastname);
};

var person = new Person('Jon', 'Doe');

person.greet();
