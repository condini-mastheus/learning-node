// Your Javascript Code Goes Here
var person = {
    firstname: 'Joan',
    lastname: 'Doe',
    greet: function() {
        console.log('Hello ' + this.firstname + ' ' +  this.lastname);
    }
};

person.greet();

console.log(person['firstname']);

console.log(person.firstname);
