
var http = require("http");
var vari = require("../main.js")

//I currently have no idea why this does not work.
http.createServer(function(request, response) {  
    response.writeHeader(200, {"Content-Type": "text/html"});  
    response.write(vari);
    response.end();
}).listen(8000);