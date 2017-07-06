app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
		.state({
			"name":"index",
			"url":"/index",
			"templateUrl":"./pages/main.html"
		})
		.state("index.message",{
        	url:"/message",
            templateUrl:"./pages/message.html"
        })
        .state("index.play",{
        	url:"play",
            templateUrl:"./pages/play.html"
        })
        .state("index.play.introduce",{
        	url:"/introduce",
            templateUrl:"./pages/introduce.html"
        })
        .state("index.play.invite",{
        	url:"/invite",
            templateUrl:"./pages/invite.html"
        })
        .state("index.play.apply",{
        	url:"/apply",
            templateUrl:"./pages/apply.html"
        })
        .state("index.play.summarize",{
        	url:"/summarize",
            templateUrl:"./pages/summarize.html"
        })
	$urlRouterProvider.otherwise("index")
})