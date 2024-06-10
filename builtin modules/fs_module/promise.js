// promise module 
// const { error } = require("console");
const fs = require("fs/promises");
// display of async functionality through promises
// console.log("first");
// fs.readFile("C:\\Users\\HP\\nodejs tutorial\\builtin modules\\fs_module\\promises.txt", "utf-8")
// .then((data) => console.log(data))
// .catch((error) => console.log(error));
// console.log("second");


// async function read file

async function read_file(){
    try{
        const data = await fs.readFile("C:\\Users\\HP\\nodejs tutorial\\builtin modules\\fs_module\\promises.txt", "utf-8")
        console.log(data);
    }catch(error){
        console.log(error);
    }

}

read_file()