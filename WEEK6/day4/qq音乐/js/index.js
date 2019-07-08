// 1. 获取元素
let $main = $('.main');
let $header = $('.header');
let $footer = $('.footer');
let musicAudio = document.querySelector('.musicAudio');
let $musicBtn = $('.musicBtn');
let $wrapper = $('.wrapper');

let autoTimer = null;

// 2. 设置main的高度
// 页面的高度 - header的高度 - footer的高度 - 0.6rem

function computedMain() {
	let winH = document.documentElement.clientHeight;
	let headerH = $header[0].offsetHeight;
	let footerH = $footer[0].offsetHeight;
	let fontSize = parseFloat(document.documentElement.style.fontSize);
	let curH = (winH - headerH - footerH) / fontSize - 0.6;

	$main.css({
		height: curH + 'rem'
	});
}

computedMain();
window.addEventListener('resize', computedMain);

// 3. 获取数据

$.ajax({
	url: 'json/lyric.json',
	type: 'get',
	async: false,
	success({lyric}) {
		bindHTML(lyric);
	}
});

// 4. 绑定数据
function bindHTML(data) {
	// 4.1 处理标题问题
	let d1 = data.replace(/&#(\d+);/g, function (res, a) {
		switch (parseFloat(a)) {
			case 32:
				return ' ';
			case 40:
				return '(';
			case 41:
				return ')';
			case 45:
				return '-'
		}
		return res;
	});

	let ary = [];
	// [00&#58;08&#46;73]一直地一直地往前走&#10; 
	d1.replace(/\[(\d+)&#58;(\d+)&#46;(?:\d+)\]([^&#]+)(?:&#10;)/g, function (res, min, sec, value) {
		ary.push({
			minute: min,
			second: sec,
			value: value
		});
	});
	// console.log(ary);

	let str = ``;
	ary.forEach(({minute, second, value}) => {
		str += `<p data-min="${minute}" data-sec="${second}">${value}</p>`;
	});
	$wrapper.html(str);

	// 歌词就绪后播放音乐
	musicAudio.play();

	// 让音符转起来
	$musicBtn.addClass('select');

	// 计算时间更新进度
	autoTimer = setInterval(computedTime, 1000);
}

let curTop = 0;
let step = 0;

function computedTime() {
	let {currentTime, duration} = musicAudio;
	let curTime = formatTime(currentTime);
	let durTime = formatTime(duration);

	$('.current').html(curTime);
	$('.duration').html(durTime);

	if (currentTime >= duration) {
		clearInterval(autoTimer);
	}

	$('.already').css({
		width: currentTime / duration * 100 + '%'
	});

	let split = curTime.split(':');
	let min = split[0];
	let sec = split[1];
	let highLightItem = $('.wrapper > p').filter(`[data-min="${min}"]`).filter(`[data-sec="${sec}"]`);
	if (highLightItem.length) {
		highLightItem.addClass('select').siblings().removeClass('select');
		step++;
		if (step > 4) {
			curTop -= .84;
			$wrapper.css('top', `${curTop}rem`);
		}
	}
}

function formatTime(time) {
	let min = Math.floor(time / 60);
	let sec = Math.round(time - min * 60);
	min < 10 && (min = '0' + min);
	sec < 10 && (sec = '0' + sec);

	return `${min}:${sec}`;
}

// 轻触音符按钮，如果

$musicBtn.tap(function () {
	if (musicAudio.paused) {
		musicAudio.play();
		$musicBtn.addClass('select');
		autoTimer = setInterval(computedTime, 1000);
	} else {
		musicAudio.pause();
		clearInterval(autoTimer);
		$musicBtn.removeClass('select');
	}
});