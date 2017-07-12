app.directive('uploadImg', function ($http) {
	return {
		restrict: 'EACM',
		replace:true,
		template:`
			<div class="img-show">
				<div class="title">
					 <b>请输入栏目名称</b>
					 <span ng-click='addItem()'>编辑 添加栏目</span>
					 预览
				</div>
				<div class="text updata-wrap">
					点击添加图片
					<input class="form-control updata-file" type="file" rows="3">
				</div>
				<p>图片格式：jpg\png 图片大小：小于200k 建议尺寸：宽度大于800px</p>
			</div>
		`,
		controller:function($scope, $element, $compile){
			console.log($element)
			$scope.addItem = function(){
				$element.append($compile(`<upload-img></upload-img>`)($scope.$parent))
			}
			$element.find(".updata-file")[0].onchange=function(e){
				// 上传的服务器
				// var file = new FormData(this);
				// $http.get("XXXXX",{data:file}).then(function(data){
				// 	console.log(data)
				// })
				let file = e.target.files
				let bg =  $element.find(".updata-wrap")[0]
				console.log(file[0])
				let reader = new FileReader()
					reader.readAsDataURL(file[0])
					reader.onload = function(data){
						// console.log(this.result)	
						bg.style.background = "url("+this.result+")"
						bg.innerText = ""
					}
					// this.text("")
					console.log(this)
			}
		},
		link: function (scope, iElement, iAttrs) {
			
		}
	};
})