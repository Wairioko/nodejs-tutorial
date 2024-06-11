// import http and fs
const http = require("node:http");
const fs = require("node:fs") 



const server = http.createServer(
    (req, res) => {
        
        res.writeHead(200, {
            "contentType":"application/html"}
        );
        // read in stream to improve speed, application lesson from buffers and piping
        const html = fs.createReadStream(__dirname + "/index.html", 'utf-8').pipe(res)
        //  
    }
)

port = 9050

server.listen(port, () => {

    console.log(`listening to connection on port ${port}`)
})