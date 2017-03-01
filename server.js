const http = require("http");
const fs = require("fs");
const mime = require("mime");
const port = 8000;
const htmlDir = "./public";


const server = http.createServer(function(req,res){
	var filePath = " ";
	console.log("[log] Requent string > "+req.url);
	if(req.url==="/"){
		filePath = htmlDir+req.url+"index.html";
		serveStaticFile(res,filePath);
	}else if(req.url === "/MYSQL"){
		filePath = "./lib/mysql.js";
		// route >>>> not desing yet
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
		if(err){
			console.log("read file err: reqource not found");

		}
		res.writeHead(200,{"Content-Type":  mime.lookup(filePath) });
		res.write(fileContent);
		res.end();

	});
}

function send404(res,message){
	console.log("in send404");
	//res.writeHead(200,{"Content-Type":"text/plain"});
	//res.end("[log] Resources not found: "+message);
}
