//同querySelectorAll
console.log($("ul li"));//class".l" id("#a") 
console.log($("ul .l#a"));
console.log($("li:not(:last-child) + li"));
//选择方法

//eq方法，索引
console.log($("body").eq(0));//返回的document对象不同
console.log($(".l").eq(3)[0]);
console.log($(".l").eq(3));
console.log($(".l:eq(3)"));//返回Selector属性
console.log($("ul .l:eq(3)"));

function People(){
	this.walk = function(){
		console.log("walk");
		return this;

	};
	this.run = function(){
		console.log("run");
		return this;
	};
	this.laugh = function(){
		console.log("laugh");
		return this;
	};
}
console.log(new People().walk());
//不加return this返回undefind
console.log(new People().walk().run().laugh());
//加之后返回People()

//find方法，查找子级
console.log($("body").find("ul li"));
console.log($("body").find("#a").find("span"));

/*以下所有方法如果没有筛选条件，则返回所有找到的结果*/

//children方法，查找直接子级
console.log($("html").children(/*筛选条件*/));
console.log($("html").children("head"));
console.log($("html").children("ul"));//找不到，不是直接子级

//siblings方法，查找兄弟标签
console.log($("body").siblings(/*筛选条件*/));
console.log($("body").siblings());
console.log($("li").siblings());
console.log($("li").siblings(".d"));

//prev方法，查找前一个兄弟标签
console.log($(".b").prev(/*筛选条件*/));

//prevAll，查找前所有兄弟标签
console.log($(".c").prevAll(/*筛选条件*/));

//next方法，查找后一个兄弟标签
console.log($(".b").next(/*筛选条件*/));

//nextAll方法，查找后所有兄弟标签
console.log($(".b").nextAll(/*筛选条件*/));

//parent方法，查找当前标签的父级标签
console.log($(".b").parent(/*筛选条件*/));
console.log($("a").next().children().parent().nextAll().eq(2));
