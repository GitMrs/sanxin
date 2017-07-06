 app.run(function($rootScope){
	$rootScope.state = 1
	$rootScope.nav = function(i){
		$rootScope.state = i
		if(i==2){
			window.location.href = "index.html#/indexplay/introduce"
		}
		console.log($rootScope.state)
	}
	$rootScope.tabNav = 1
	$rootScope.tabs = function(i){
		console.log(i)
		$rootScope.tabNav = i
	}
 })