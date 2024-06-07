const path = ('path');

console.log(__filename)
console.log(__dirname)

console.log(path.format(path.parse(__filename))); // Formats the parsed path object back into a string

console.log(path.parse(__filename)); // Parses the file path into an object
console.log(path.parse(__dirname)); // Parses the directory path into an object

console.log(path.extname(__filename)); // Returns the file extension
console.log(path.extname(__dirname)); // Returns the extension of the directory name (usually empty)

console.log(path.basename(__filename)); // Returns the base file name
console.log(path.basename(__dirname)); // Returns the last part of the directory name





