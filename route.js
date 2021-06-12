checkDir = require('./check.js')

var router = function(){}
router.prototype =  {


   find: async function(link,re){
     var fs = require('fs');
     return await checkDir.FoD(link,re);// in between function to pass the response
   }



}

module.exports = router;