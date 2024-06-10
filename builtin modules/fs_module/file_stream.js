// import fs module

const fs = require('fs');
// create a readable stream from which data from the file is read
// highwatermark restricts to 2 chars
const readable_stream = fs.createReadStream("C:\\Users\\HP\\nodejs tutorial\\builtin modules\\fs_module\\promises.txt", {
    encoding: 'utf-8',
    highWaterMark: 2,
});

// create a writeable stream from which data from the file is written
const writable_stream = fs.createWriteStream("C:\\Users\\HP\\nodejs tutorial\\builtin modules\\fs_module\\file.txt", );

// use events module to read data from file, print error if found and 
// write the data  to from the readable stream source ]
//  to writeable stream destination
readable_stream.on("data",  chunk => {
    console.log(chunk)
    writable_stream.write(chunk)   
    }
);


// other types of streams include,
// duplex: both read and write
// transform: modify data as its being read or written


