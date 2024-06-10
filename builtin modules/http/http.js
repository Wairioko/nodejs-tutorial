// import http module
const http = require("node:http");
const { encode } = require("node:punycode");
const { json } = require("stream/consumers");

// create a server method to create a server
// takes in req callback and res
// req gives info on request and res gives a response to 
const server = http.createServer((req, res) => {
    // specify data type of the response 
    // res.writeHead(200, {
    //     "Content-type":"text/plain"
    // });

    // // response from server on connection
    // res.end("Hello Munga")

    // now sending json data as the response
    res.writeHead(200, {
        "ContentType":"application/json"
    })

    const batman = {
        "name": "batman",
        "superpower": "trustfund"
    }
    const batman_convert = JSON.stringify(batman)
    res.end(batman_convert);

    // sending html content
    
})

var port_number = 9000
// code to launch server on port 9000
server.listen(port_number, ()=> {
    console.log(`running on port ${port_number}`)
    
});



 