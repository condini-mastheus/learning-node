var buffer = new Buffer('Hello', 'utf8');
console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());

buffer.write('Wo');
console.log(buffer.toString());
