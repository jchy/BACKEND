const http = require('http');

const server = http.createServer((req, res) => {
        try{
            res.writeHead(200,{'Content-Type' : 'application/json'});
            res.end(JSON.stringify({
                data:"Server is runnig"
            }));
        }
        catch(err){
            res.writeHead(500,{'Content-Type' : 'application/json'});
            res.end(JSON.stringify({
                data : 'Error while loading the server'
            }));
        }
})

server.listen(3001,()=>{
    console.log('listening on prt 3001');
})