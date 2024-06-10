// import the fs builtin module
const file_system = require("fs");

console.log("zero")
// read the text in file system
const read_text = file_system.readFileSync("C:\\Users\\HP\\nodejs tutorial\\builtin modules\\fs_module\\file.txt", "utf-8");
console.log(read_text);


console.log("first");
// code to read file, an error led callback on display
// a display of the async function in node js
file_system.readFile("C:\\Users\\HP\\nodejs tutorial\\builtin modules\\fs_module\\file.txt", (error, data) => {
    if(error){
        console.log(error)
    }else{
        console.log(data)
    }

    }
);


// second will be printed after first and not the file contents 
// a display of async nature of node js
console.log("second")


// write contents to file
file_system.writeFileSync("C:\\Users\\HP\\nodejs tutorial\\builtin modules\\fs_module\\file.txt",
     "Niaje Munga"
    );

    console.log(read_text);

console.log("third");
