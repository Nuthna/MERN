const os=require("os");
var freememory =os.freemem();
var totalmem=os.totalmem();
console.log(totalmem +"      " +freememory); 


const start =Date.now();
//some operation
var totalmem=os.totalmem();
const end = Date.now();
console.log("Operation took: " + (end - start) + "ms");

