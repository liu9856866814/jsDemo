let bannerRender = (function () {
    // 1. 获取元素
    let $container = $('.container'),
        $wrapper = $('.wrapper'),
        $focus = $('.focus'),
        $slideList = null,
        $focusList = null,
        $arrowLeft = $('.arrowLeft'),
        $arrowRight = $('.arrowRight');

    let duration = 3000; // 设置自动轮播时间间隔
    let autoTimer = null; // 设置定时器
    let stepIndex = 0; // 设置一个记录索引的值；

    // 获取数据
    function queryData() {
        $.ajax({
            url: 'json/banner.json',
            method: 'get',
            dataType: 'json',
            async: false,
            error(err){
                console.log('获取数据失败');
            },
            success(data){
                // console.log(data);
                bindHTML(data);
            }
        })
    }
    function bindHTML(data) {
        let slideStr = ``,focusStr = ``;
        data.forEach(({img,desc}, index) => {
            // console.log(img,desc,index);
            slideStr += `<div class="slide"><img src="${img}" alt="${desc}"></div>`;
            focusStr += `<li class="${index === 0 ? 'active': ''}"></li>`
        });
        slideStr += `<div class="slide"><img src="${data[0].img}" alt="${data[0].desc}"></div>`;
        // console.log(slideStr);
        $wrapper.html(slideStr);
        $focus.html(focusStr);
        $slideList = $('.slide');
        $focusList = $('.focus > li');
        $wrapper.css({
            width: $slideList.length * 1000
        })
    }
    function autoMove() {
        stepIndex++;
        console.log(stepIndex);
        if(stepIndex >= $slideList.length){
            console.log(stepIndex);
            $wrapper.css({
                left: 0
            });
            console.log($wrapper.left);
            stepIndex = 1;
        }
        $wrapper.stop().animate({
            left: -1 * stepIndex * 1000
        }, 500);
        changeFocus();
    }
    function changeFocus() {
        let tmpIndex = stepIndex;
        if(tmpIndex === $slideList.length - 1){
            tmpIndex = 0;
        }
        $focusList.eq(tmpIndex).addClass('active').siblings().removeClass('active');
    }
    function handleContainer() {
        $container.on('mouseenter',function () {
            clearInterval(autoTimer);
            $arrowLeft.css({
                display: 'block',
            });
            $arrowRight.css({
                display: 'block'
            })
        }).on('mouseleave', function () {
            $arrowLeft.css({
                display: 'none'
            });
            $arrowRight.css({
                display: 'none'
            });
            autoTimer = setInterval(autoMove, duration);
        })
    }
    function handleArrow() {
        $arrowLeft.click(function () {
            stepIndex--;
            if(stepIndex < 0){
                $wrapper.css({
                    left: -($slideList.length -1) * 1000
                });
                stepIndex = $slideList.length -2;
            }
            $wrapper.animate({
                left: -stepIndex * 1000
            });
            changeFocus();
        });
        $arrowRight.click(autoMove);
    }
    function handleFocus() {
        $focusList.click(function () {
            let index = $(this).index();
            // console.log(index);
            stepIndex = index;
            // console.log(stepIndex);
            $wrapper.animate({
                left: -1 * stepIndex * 1000
            });
            changeFocus();
        })
    }
    return{
        init(){
            queryData();
            // autoMove();
            handleContainer();
            handleArrow();
            handleFocus();
            autoTimer = setInterval(autoMove, duration);
        }
    }
})();
bannerRender.init();
