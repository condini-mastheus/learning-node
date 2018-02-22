function Greetr() {
    this.greeting = 'Hello world! !!! aaa';
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = Greetr;
