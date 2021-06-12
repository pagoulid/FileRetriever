r = require('./route').prototype;
var process = require('process');
// if enviroment production run node if development run through nodemon
if (process.env.NODE_ENV == 'production') {
	console.log(process.env.NODE_ENV);
	const srv = require('http').createServer((req,res) =>{

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
}
else{

	console.log(process.env.NODE_ENV);


	// alt.js script is the same script in production loop
	// want on crash message to restart how to do it
	var app= require('nodemon');
	
	var script = app({script:'alt.js'});
	
	script.on('start',()=>{
		console.log('Started');
		
		
	
	
	}).on('crash',()=>{


			console.log("CRASH MSG");
			console.log("Restarting...");
			
			
			script.emit('restart');
			
		}).on('restart',()=>{
			
			
			var newscript = app({script:'alt.js'});
			scriptfunc(newscript);
		});


function scriptfunc(sc){
	sc.on('start',()=>{
		console.log('Restarted Succesfully');


	}).on('crash',()=>{
		console.log("CRASH MSG");
		console.log("Restarting...");
		var newsc = app({script:'alt.js'});
		scriptfunc(newsc);


	})
	sc.emit('start');

}
	

}
	




