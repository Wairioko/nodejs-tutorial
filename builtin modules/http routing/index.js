// import http and fs module
const fs = require('node:fs');
const http = require('node:http');

// create the server
const server = http.createServer((req, res) => {
    // if route started with / display home page
    if(req.url === '/'){
        res.writeHead(
            200, {
                'Contenttype':'text/plain'
            }
        );
        res.end("Home Page");
        // if route about is specified display about page
    }else if(req.url === '/about'){
        res.writeHead(
            200, {
                'Contenttype':'text/plain'
            }
        );
        res.end("About Page");
    }else{
        // if route not specified above, display 404 page
        res.writeHead(
            200, {
                'Contenttype':'text/plain'
            }
        );
        res.end("Page not Found: 404");
    }
    res.end()
})

const port = 9030
server.listen(port, ()=>{
    console.log(`Listning to server on port: ${port}`)
});