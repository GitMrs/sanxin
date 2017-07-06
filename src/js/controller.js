angular.module('app')
	.controller('index',function($scope,slidelist,packagelist,$element) {
                // console.log(slidelist.data.data)
                $scope.data = slidelist.data.data
                $scope.Tnav = 1
                $scope.Tfn = function(i){
                    if(i==1){
                        $scope.data = slidelist.data.data
                        setTimeout(function(){
                            $element.find('.collapse').on("show.bs.collapse",function(){
                                $element.find('.collapse').collapse("hide")
                            })
                        },200);
                    }else if(i==3){
                       $scope.data = packagelist.data.data
                        setTimeout(function(){
                            $element.find('.collapse').on("show.bs.collapse",function(){
                                $element.find('.collapse').collapse("hide")
                            })
                        },200);
                    }
                     $scope.Tnav=i
                }
                setTimeout(function(){
                    $element.find('.collapse').on("show.bs.collapse",function(){
                        $element.find('.collapse').collapse("hide")
                    })
                },200);
                 
            })
