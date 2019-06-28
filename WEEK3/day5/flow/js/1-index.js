// 瀑布流：宽度相同的多列不规则排布。
// 每一列由很多块构成，每一块宽度相同，高度不同。最终这些列之间高度不能相差太大。
// 同时当页面滑动到底部时就去加载下一页。
// 并且为页面中所有图片设置懒加载功能（延时加载）。

// 原理：首先页面中的数据不能是写死的，是动态获取来的（ajax）,接着把数据绑定成html.在插入到列之前，先给这些列按照高度进行升序排序，
// 在插入数据时，先给高度最矮的插，再给第二矮的插，最后给最高的插。这样就能保证最近高度相差不会太大。
// 页面滚动到底去加载下一页：什么时候计算？页面滚动时，即onscroll事件触发时；
// 怎么计算？页面的scrollHeight - 页面的scrollTop - 浏览器可视窗口的高度clientHeight <= 0 表示已经滚到底了
// 所以就是在页面的onscroll事件中去计算剩余高度，当剩余高度为0就表示要到底了。


// 1.导入工具方法：
const { win, offset, arrLikeToAry, toJSON} = window.utils;

// 2. 获取元素
let flowBox = document.getElementById('flowBox');
let flowList = flowBox.getElementsByTagName('li'); // 集合，类数组

// 3. 从服务端获取数据
let imgData = null;
let page = 0; // 请求的是第几页
function queryData(){
	// 因为滑动到底还需要去加载第二页，而服务器需要咱们告诉它我需要第几页的数据，然后服务器接收到这个页数，它会返回给你想要
	// 的页数对应的数据。（这种技术叫做分布）一般get请求通过在url末尾拼接查询参数的方式把这些数据传递给服务器
	// AJAX四步：
	page++;
	let xhr = new XMLHttpRequest();
	xhr.open('get',`json/data.json?page=${page}`,false);
	xhr.onreadystatechange = function () {
		if(xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status) ){
			imgData = toJSON(xhr.responseText);
		}
	};
	xhr.send();
}
queryData();

// 4. 绑定数据：因为滑动到底时会请求第二页的数据，请求完数据还需要绑定，所以绑定数据这些代码会执行多次，所以需要封装一个方法。
function bindHTML() {
    // 4.1 遍历获取来的数据
	// 现在有20条数据，每次取3条，第一次取的0，1，2 的这三个，下一次再取三个3，4，5的这三个，i += 3

	// 假如有10条
	// 0 1 2
	// 3 4 5
	// 6 7 8
	// 9 10 11 最后 一次取的时候，后两项不存在；所以在绑定数据时，要判断一下item1、item2、item3是否存在；
	for (let i = 0; i < imgData.length; i += 3) {
		let item1 = imgData[i];
		let item2 = imgData[i + 1];
		let item3 = imgData[i + 2];

		// 2. 为了保证这三列的高度相差不大，在给每一列插数据之前先给这三列按照高度进行排序；
		let flowListAry = arrLikeToAry(flowList); // 把这三个li的集合转成数组
		// 按照真实的高度升序排序
		flowListAry.sort((a, b) => a.offsetHeight - b.offsetHeight);
		// 此时排过序后，flowListAry中第一项最矮的，第二个是第二矮的，第三个是最高的
		// 3. 绑定数据，按照排好的顺序插入到每一列中
		if (item1) { // item1 不存在时是undefined,undefined转成布尔值是false
			flowListAry[0].innerHTML += queryHTML(item1);
		}
		if(item2){
			flowListAry[1].innerHTML += queryHTML(item2);
		}
		if(item3){
			flowListAry[2].innerHTML += queryHTML(item3);
		}
	}
}
bindHTML();
lazyLoad(); // 第一次插入数据后,就有数据展示在第一屏,所以要手动触发延时加载的方法

function queryHTML({link, pic, title}){ // {link, pic, title} 是对传过来的实参进行结构赋值
	// 这个函数专门拼接HTML字符串
	return `<a href="${link}">
			<div><img src="${pic}" alt=""></div>
			<span>${title}</span></a>`
}

// 5. 加载更多：
let timer = null;
window.onscroll = function () { // 只要页面中滚动条滚动就会触发onscroll事件，事件函数就会从头到尾的执行一遍。因此我们可以在
	// 滚动时去计算页面有没有滚动到底
	// 判断页面有没有滚动到底：页面的scrollHeight - 页面的scrollTop - 浏览器可视窗口的高度 <= 0 时就表示滚动到底了
	lazyLoad(); // 边滚动边计算哪些图片该加载了
	// let pageH = document.documentElement.scrollHeight || document.body.scrollHeight;
	let pageH = win('scrollHeight'); // 获取页面的高度
	let scrollTop = win('scrollTop'); // 获取页面滚动条卷去的高度
	let winH = win('clientHeight'); // 浏览器可视窗口的高度
	if (pageH - scrollTop - winH <= 100){
	//	满足这个条件时说明已经滚动到底了，应去加载下一页;一般情况下,不会等到真的到底才去加载,一般pc端还会剩余一些的时候就去
		//	加载.(移动端一般都到底才加载,因为移动端的流量很值钱,要省着点)
		// 把它改成小于等于100之后就会出现一个现象，只要小于100，比如98px,也满足这个条件，再往下滑就是96px，也满足条件...
		// 照这样下去，如果一直滑就会一直满足条件。而满足条件就会请求数据，带来多次请求的问题；
		if(timer) clearTimeout(timer);
		timer = setTimeout(() =>{
			// console.log(123);
			queryData(); // 获取数据
			bindHTML(); // 把获取来的数据绑定到页面中
		},300);
	}
};

// 6. 图片延时加载 lazy-load

function lazyLoad() {
	// 1. 获取页面中所有的图片
	let winScrollTop = win('scrollTop'); // 获取页面卷去的高度
	let winH = win('clientHeight'); // 获取浏览器可视窗口的高度
	let imgList = document.querySelectorAll('img');
	// 2. 多张图片延时加载遍历图片集合，看每一张图片是否应该被加载
	for (let i = 0; i < imgList.length; i++) {
		let img = imgList[i]; // 每一张图片
		if(img.src){
			continue; // 如果图片src属性有值,说明它被加载过了,不应该再重复加载,所以应该continue跳过这一张;
		}
		// 判断当前图片是否应该出现在浏览器的可视区域
		let imgOffsetTop = offset(img).top; // 图片距离body顶部的距离

		if (imgOffsetTop - winScrollTop - winH <= 0){
			// 满足这个条件说明图片该出来了,此时应该去加载它
			let dataSrc = img.getAttribute('data-src');
			let newImg = new Image(); // 新建一个img元素
			newImg.src = dataSrc; // 把src给新的img标签尝试加载
			newImg.onload = function () {
				// 如果尝试加载成功,就会触发此onload事件
				img.src = dataSrc;
				newImg = null; // 释放堆内存空间
			};
			newImg.onerror = function () {
				// 如果尝试失败,就会触发onerror事件
				// 如果要处理这个错误,在这里处理就行
			}
		}
	}
}

// 为什么页面中的图片插入的时候会偶尔乱序? 因为for循环在向页面中的列插入的时候是同步插入的,但是图片加载是异步的,就是说向列中
// 追加数据时,不会等着图片请求回来再插.这样做就会导致图片还没拿到时,图片高度就是0,这张图片所在的列就被当成高度最矮的列,在
// 追加时又优先给这一列追加了一张.等那张图片加载完,高度就会被撑开,所以这一列很有可能比别人多了图片.

// 函数的节流和防抖：降低js代码的执行频率；用一个定时器，来实现节流和防抖；

