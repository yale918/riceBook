const http	= require("http");
const fs	= require("fs");
const mime	= require("mime");
const port	= 8000;
const htmlDir = "./public";


const server = http.createServer(function(req,res){
	var filePath = " ";
	if(req.url==="/"){
		filePath = htmlDir+req.url+"index.html";
		serveStaticFile(res,filePath);
	}
	else{
		filePath = htmlDir+req.url;
		serveStaticFile(res,filePath);
	}
});

server.listen(port,function(){
	console.log("[log] http server listening: "+ port);
});

function serveStaticFile(res,filePath){
	fs.readFile(filePath,function(err,fileContent){

		res.writeHead(200,{"Content-Type":  mime.lookup(filePath) });
		res.write(fileContent);
		res.end();

	});
}