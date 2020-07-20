// 引入资源
let Koa = require('koa');
let KoaRouter = require('koa-router');

// 1.创建Koa实例
const app = new Koa()

// 3.创建koa-router实例，生成实例
const router = new KoaRouter()
app
	.use(router.routes())//允许使用路由
	.use(router.allowedMethods())//允许使用路由方法

// 4.注册路由 
router.get('/',(ctx,next)=>{
	// 测试返回数据
	ctx.body = 'success----服务器测试数据'
})
// ------------------------------------------------首页数据接口
let indexData = require('./datas/index.json')
router.get('/getIndexData',(ctx,next)=>{
	ctx.body = {
		code:200,
		data:indexData
	}
})

// 2.监听服务器
app.listen('3002',(err)=>{
	// nodejs错误优先机制
	if(err){
		console.log('服务器启动失败',err)
	}else{
		console.log('服务器启动成功','http://localhost:3002');
	}
})
