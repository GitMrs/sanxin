app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state({
            "name": "index",
            "url": "/index",
            "templateUrl": "./pages/main.html",
            "resolve": {
                slidelist: function($http) {
                    return $http.get("../mock/entry.json")
                },
                packagelist: function($http) {
                    return $http.get("../mock/public.json")
                }
            },
            "controller": "index"
        })
        .state("index.city", {
            url: "/city",
            templateUrl: "./pages/birthday.html",
            params: {
                id: null
            },
            controller: function($stateParams) {
                console.log($stateParams)
            }
        })
        .state("index.cityfimaily", {
            url: "/cityfimaily",
            templateUrl: "./pages/birthday.html"
        })
        .state("index.birthday", {
            url: "/birthday",
            templateUrl: "./pages/birthday.html",
            controller: function($scope, $state) {
                // $state.go("index.birthday.message")
            }
        })
        .state("index.five", {
            url: "/five",
            templateUrl: "./pages/birthday.html"
        })
        .state("index.takecare", {
            url: "/takecare",
            templateUrl: "./pages/birthday.html"
        })
        .state("index.safe", {
            url: "/safe",
            templateUrl: "./pages/birthday.html"
        })
        .state("index.kejiguan", {
            url: "/kejiguan",
            templateUrl: "./pages/birthday.html"
        })
        .state("index.shuhuashi", {
            url: "/shuhuashi",
            templateUrl: "./pages/birthday.html"
        })
        .state("index.birthday.message", {
            url: "/message",
            templateUrl: "./pages/message.html",
            controller: function($scope, $element, $http) {
                console.log($element.find(".people"))
                $http.get("../mock/people.json").then(function(data) {
                    $scope.pepleData = data.data[0].list
                    console.log($scope.pepleData)
                    $scope.compnyData = data.data[1].list
                })
                $element.find("#mydropdownPeople").on("hide.bs.dropdown", function(e) {
                    $element.find("#disabledInputPeople").val(e.slidData)
                })
                $element.find("#mydropdownCon").on("hide.bs.dropdown", function(e) {
                    $element.find("#disabledInputCon").val(e.slidData)
                })
            }
        })
        .state("index.birthday.play", {
            url: "play",
            templateUrl: "./pages/play.html"
        })
        .state("index.birthday.play.introduce", {
            url: "/introduce",
            templateUrl: "./pages/introduce.html"
        })
        .state("index.birthday.play.invite", {
            url: "/invite",
            templateUrl: "./pages/invite.html",
            controller: function($rootScope, $scope, $http, $element, $state) {
                  $element.find(".all").on("click",function(){
                    if(this.checked==true){
                        for(var i=0;i<$element.find(".cb").length;i++){
                            $element.find('.cb')[i].checked = true
                        }
                    }else{
                         for(var i=0;i<$element.find(".cb").length;i++){
                            $element.find('.cb')[i].checked = false
                        }    
                    }
                })
                setTimeout(function(){
                    $element.find(".cb").on("click",function(){
                    var num = 0;
                    console.log(00)
                    $element.find(".cb").each(function(index, el) {
                        if(!$(el).prop("checked")){
                            num++
                        }  
                    })
                    if(num==0){
                        $element.find(".all").prop("checked",true)
                    }else{
                        $element.find(".all").prop("checked",false)

                    }
                })
                },1000)
               
                // $scope.tesarry = [1,2,3,4,5,6,7,8,9,10]
                // $scope.choseArr = [];
                // var len = $scope.tesarry.length;
                // var flag = ''
                // $scope.x = false
                // $scope.all = function(c, v) { //全选
                //     if (c == true) {
                //         console.log()
                //         $scope.x = true;
                //         $scope.choseArr = angular.copy(v);
                //         flag = 'a';
                //     } else {
                //         $scope.x = false;
                //         $scope.choseArr = [];
                //         flag = 'b';
                //     }
                // }
                // $scope.chk = function(z, x) { //单选或者多选    
                //     if (x == true) { //选中             
                //         $scope.choseArr.push(z)
                //         flag = 'c'
                //         if ($scope.choseArr.length == len) {
                //             $scope.master = true
                //         }
                //     } else {
                //         $scope.choseArr.splice($scope.choseArr.indexOf(z), 1); //取消选中
                //     }
                //     if ($scope.choseArr.length == 0) {
                //         $scope.master = false
                //     }
                // }
                $http.get("/index/birthdayplay/invite").then(function(data) {
                    $scope.activeList = data.data.list
                    console.log($scope.activeList)
                })
                var options = {
                    currentPage: 3,
                    totalPages: 10,
                    bootstrapMajorVersion: 3,
                    onPageChanged: function(e, o, n) {
                        // console.log(oZCM<>)
                        $http.get("/index/birthdayplay/invite?count=" + n).then(function(data) {
                            $scope.activeList = data.data.list
                        })
                    }
                }
                setTimeout(function() {
                        $element.find(".pagelist").bootstrapPaginator(options)
                    }, 100)
                    // $http.get("../mock/company.json").then(function(data){
                    //     var datalist = function(data,curr){
                    //         var arr = [];
                    //         console.log(111)
                    //         $scope.invuteData = data.concat().splice(curr*nums-nums, nums);
                    //     }
                    //     var nums = 2;
                    //     laypage({
                    //         cont:"pagelist",
                    //         pages:Math.ceil(data.data.length/nums),
                    //         jump:function(obj){
                    //            datalist()
                    //         }
                    //     })     
                    // })
            }
        })
        .state("index.birthday.play.apply", {
            url: "/apply",
            templateUrl: "./pages/apply.html"
        })
        .state("index.birthday.play.summarize", {
            url: "/summarize",
            templateUrl: "./pages/summarize.html"
        })
        // $urlRouterProvider.otherwise("index.message")
    $urlRouterProvider.otherwise("index")
        // console.log($urlRouterProvider.when("index.message","index"))
})
