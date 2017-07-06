 app.run(function($rootScope){
	$rootScope.state = 1
	$rootScope.nav = function(i){
		$rootScope.state = i
		console.log($rootScope.state)
	}
	$rootScope.tabNav = 1
	$rootScope.tabs = function(i){
		console.log(i)
		$rootScope.tabNav = i
	}
 })