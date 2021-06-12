
var fs = require('fs');
require('http');
let controller = (file,re) =>{
   console.log('check:'+file);
   if(file!=null ){ 
   re.writeHead(200,{'Content-Type':'text/plain'});
   re.write(fs.readFileSync(file,'utf-8')); // must pass subdirectory
   
   re.end();
   
   }
   else{
      re.writeHead(404);
      re.write('File not aaaFound');
      re.end();


   }
  
}






//exports.dir = 
var dir = (link,re,d) =>{ // main function of checking if file of url exists in our curr dir
   fs.readdir(d,'utf-8',(err,files) =>{// curr dir './' else if dir path = /..../...../...
      let finfile;
      if (err){
         
         throw(err);

      }
      let count = 0;
      //let finfile;
      var path = link.split('/');
      const f = path[1];
   //////////////////////////////////////////////////////
      files.forEach(file =>{ // if file exists return it else return # of searches
         if (file == f){
            //console.log('file exists!') // works
            finfile = f;
            //return finfile;
         }
         else{
            count++;
         }
      });
      ///////////////////////////////////////////////////////
      if(count == files.length ){
            return controller(null,re);
      }
      else{
         //console.log('file: ' + finfile) works!!

         //////////BREAKPOINT//////////////
         finfile = d+finfile;
         //////////BREAKPOINT//////////////
         return controller(finfile,re);// if exists pass the file to retf to send it on webpage
      }  
     });






}


// checks if file or directory
exports.FoD = (f,re) => {

   var len = f.split('/');


   if(len.length == 2){
      console.log('its a file');
      dir(f,re,'./');
   }
   else{
      console.log('its a dir');
      let str = './';
      delete len[0]; // we dont need ,it is blank
      var subf ='/'+ len[len.length - 1]; // subfile at the end of dir ,'/' + because of file split in dir function
      delete  len[len.length - 1];
      len.forEach(sub => {
         str = str + sub + '/';
         
      });// str is subdirectory , subf is file 
      console.log(str);
      console.log(subf);
      dir(subf,re,str);

      /*
      f.forEach(sub =>{
         console.log('multi dir')
      })
     */ 

   }

}
/// can fix it to check if dir we give is valid//
