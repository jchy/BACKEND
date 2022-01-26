const http = require('http');
const { getAllUsers, getUser, addUser } = require('./app/api/users/');

const server = http.createServer((req, res) => {
        try{
            console.log(req.method ,req.url)
            const [url, query] = req.url.split("?");
            if(url === '/users'){
                if(req.method === 'GET'){
                    res.writeHead(200, {'Content-Type' : 'application/json'});
                    res.end(JSON.stringify(getAllUsers()))
                }
                else if(req.method === 'POST'){
                    console.log(url, query);
                    const [name, value] = query.split("=");
                    console.log(name, value);
                    addUser(value);
                    console.log(value, "is added to the database");
                    res.writeHead(200, {'Content-Type' : 'application/json'});
                    res.end(JSON.stringify(getAllUsers()));
                }
            }
            else if(url.startsWith('/users/')){
                const index = Number(url.split('/')[2]);
                req.writeHead(200, {'Content-Type' : 'application/json'});
                res.end(JSON.stringify(getUser(index)))
            }
            else{
                throw new Error('Din not understand your query')
            }
        }
        catch(err){
            res.writeHead(500,{'Content-Type' : 'application/json'});
            res.end(JSON.stringify({
                data : 'Error, '+ err.message
            }));
        }
})

server.listen(3001,()=>{
    console.log('listening on prt 3001');
})