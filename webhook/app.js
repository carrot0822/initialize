var http = require('http')
var createHandler = require('github-webhook-handler')
var handler = createHandler({ path: '/playload', secret: '123456' }) 
// 上面的 secret 保持和 GitHub 后台设置的一致

function run_cmd(cmd, args, callback) {
var spawn = require('child_process').spawn;
var child = spawn(cmd, args);
var resp = "";
console.log('我怎么知道你脚本执行到哪里了啊')
child.stdout.on('data', function(buffer) { resp += buffer.toString(); });
child.stdout.on('end', function() { callback (resp) });
}

http.createServer(function (req, res) {
console.log(req)
console.log('有请求')
run_cmd('sh', ['./autobuild.sh'], function(text){ console.log(text) });
console.log('请求完成')
}).listen(4567)
// 这里是监听的端口号


console.log('监听4567')