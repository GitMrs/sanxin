var gulp = require("gulp");
var webserver = require("gulp-webserver");
var url = require("url");
var Mock = require("mockjs");
gulp.task("server",function(){
	gulp.src("./")
		.pipe(webserver({
			livereload:true,
			directorylisting:true,
			middleware:function(res, req, next){
				let pathName = url.parse(res.url).pathname;
				console.log(pathName)
				if(pathName=="/index/birthdayplay/invite"){
					let data=Mock.mock({
						"list|10":[{
							"id|+1":1,
							"tab":false,
							"name":function(){
								return Mock.mock("@cname")
							},
							"address":function(){
								return Mock.Random.city()
							},
							"date":function(){
								return Mock.Random.date()
							},
							"sex":function(){
								return Mock.mock('@sexs')
							},
							"state":function(){
								return Mock.mock('@states')
							},
							"tel":/^1[3578]\d{9}$/
						}]
					})

					req.end(JSON.stringify(data))
				}
				next()
			},
			open:"./src/index.html"
		}))
})