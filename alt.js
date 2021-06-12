
r = require('./route').prototype;
var srv = require('http').createServer((req,res) =>{

    console.log(req.url);

    if(req.url =='/favicon.ico'){ // another req at fav.ico

        res.writeHead(200);
        res.end();

    }
    else{ 
    r.find(req.url,res);
    }

    });
    srv.listen(3000);
    
module.export=srv;//test if i recursively implement srv on check


