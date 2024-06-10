// import fs module

const fs = require('node:fs');
const zip = require('node:zlib')
// create a readable stream from which data from the file is read
// highwatermark restricts to 2 chars
const readable_stream = fs.createReadStream("C:\\Users\\HP\\nodejs tutorial\\builtin modules\\fs_module\\promises.txt");

// create a writeable stream from which data from the file is written
const writeable_stream = fs.createWriteStream("C:\\Users\\HP\\nodejs tutorial\\builtin modules\\fs_module\\file.txt", );

// use a pipe to perform and write procedures
readable_stream.pipe(writeable_stream)

// print on console when write to file has finished
writeable_stream.on("finish", () => {
    console.log("write procedure finished");
})

// create a gzip stream
const gzip = zip.createGzip();

// an example of chaining by the pipe function
// we move from readable stream, a transform by zipping
// then finally writing inside the zipped file

readable_stream
    .pipe(gzip)
    .pipe(fs.createWriteStream("C:\\Users\\HP\\nodejs tutorial\\builtin modules\\fs_module\\file.txt.gz"))
    .on("finish", () => {
        console.log("gzip procedure finished");
    });