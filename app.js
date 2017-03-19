//加载http模块
var http=require("http");
//加载文件模块
var fs=require("fs");
//加载url模块
var urlM=require("url");
//创建一个服务器
var server=http.createServer(function(req,res){
	//请求表头
	res.writeHead("200",{"Content-Type":"text/html;charset=utf-8"});
	//req.url:得到你的请求地址
	//url.parse()将请求信息解析成一个对象 参数为字符串(请求地址)
	//pathname:属性得到 URL 中的路径部分
	var pathname=urlM.parse(req.url).pathname;

	console.log(pathname);
	var href="./404.html";
	if(pathname=="/"){
		href="./heydian/index.html";
	}
	//先读取文件
	fs.readFile(href,function(err,data){
		if(!err){
			//response.write()向请求的客户端发送响应内容。
			res.write(data.toString());
            res.end();
		}
	});
})
//监听这个端口
server.listen(8080,function(){
	console.log("服务已启动")
})