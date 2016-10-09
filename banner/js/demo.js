$.fn.extend({
	banner1 : function(){
		var $arrImgs = this.find("a"),
			len = $arrImgs.length;
		this._tab($arrImgs, len);
	},
	banner2 : function(option){
		var _this = this;
		$.map(option, function(item){
			console.log(item);
			$("<a></a>").appendTo(_this).css("background-image","url(" + item + ")");
		});
		this._tab(this.find("a"), option.length);
	},
	_setCurrent : function(imgs, index){
		imgs.eq(index).addClass("current").siblings().removeClass("current");
		
	},
	_tab : function(imgs, len){
		var _this = this,
			index = 0;
		this._setCurrent(imgs, index);//让第一张在刷新的瞬间出来
		setInterval(function(){
			index = index > len - 2 ? 0 : index + 1;
			_this._setCurrent(imgs,index);
		},2000);
	},
	_click : function(){
		var _this = this;
		this.click(function(){
			console.log(1);
			_this.attr("disabled", "disabled");
			setInterval(function(){
			_this.removeAttr("disabled");
			},5000)
		})
	}
	
});
//数据和标签已由服务端模板渲染好
$(".banner1").banner1();
//数据由前端渲染至页面(前后端分离)
$(".banner2").banner2(["./image/03.jpeg", "./image/05.jpeg", "./image/06.jpeg"]);

$("button")._click();