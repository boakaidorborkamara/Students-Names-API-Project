const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        // TODO 1
        // READ AND SEND DATA IN index.html
        fs.readFile('./index.html', 'utf8', (err,data)=>{
            if(err){
                console.log(err)
                res.end();
            }
            else{
                res.end(data);
            }
        })
      
    }else if(req.url === "/names"){
        // TODO 2
        // READ AND SEND DATA IN names.json
        fs.readFile('./names.json', 'utf8', (err,data)=>{
            if(err){
                console.log(err);
                res.end();
            }
            else{
                res.end(data);
            }
        })

    }else{
        res.end("404")
    }
})

server.listen(3000, () => {
    console.log("Your application is listening on port 3000");
})