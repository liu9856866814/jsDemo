let bannerRender = (function () {
    // 1. 获取元素：jq获取来的集合没有dom映射；
    let $container = $('.container'),
        $wrapper = $('.wrapper'),
        $focus = $('.focus'),
        $arrowLeft = $('.arrowLeft'),
        $arrowRight = $('.arrowRight'),
        $slideList = null,
        $focusList = null;

// 配置轮播参数：
    let stepIndex = 0; // 记录container中展示图片的索引，默认展示第一张，第一张图片的索引为0
    let autoTimer = null; // 记录定时器ID,以便我们可以清除定时器
    let interval = 3000; // 轮播图的轮播间隔

// 2.1 请求数据，绑定数据
    function queryData(){
        $.ajax({
            url: 'json/banner.json',
            method: 'get',
            dataType: 'json',
            async: false,
            error(err){
                console.log('请求数据失败')
            },
            success(data){
                // console.log(data);
                //在这里执行绑定数据的方法
                bindHTML(data);
            }
        });
    }


// 2.2 绑定数据
    function bindHTML(data) {
        // 绑定数据需要搞两部分: 图片和图片下面的小点(焦点)
        let slideStr = ``; // 准备用来拼接图片
        let focusStr = ``; // 准备用来拼接小点
        // 遍历data拼接字符串
        data.forEach(({img, desc},index)=>{
            slideStr += `<div class="slide"><img src="${img}" alt="${desc}"></div>`;
            focusStr += `<li class="${index === 0 ? 'active' : ''}"></li>`;
            // 轮播图默认展示第一张图片,所以第一个小点是默认选中; data中的第一条数据,对应的是第一张图片,第一条数据的索引index是0,
        });

        // 为了实现无缝轮播:需要给wrapper最后多拼接一个第一张图片,data里面的第一条数据就是第一张图片;
        slideStr += `<div class="slide"><img src="${data[0].img}" alt="${data[0].desc}"></div>`;
        // 把拼接好的字符串插入到页面元素中
        $wrapper.html(slideStr);
        $focus.html(focusStr);

        // 重新获取slideList和focusList
        $slideList = $('.slide');
        console.log($slideList);
        $focusList = $('.focus > li');
        // 动态设置wrapper的宽度
        $wrapper.css({
            width: $slideList.length * 1000, /*1000 是图片宽度*/
        })
    }

// 实现轮播
    function autoMove() {
        stepIndex++; // stepIndex记录的container展示图片的索引
        // stepIndex = $slideList.length - 1时,container中展示的是最后一张图片(因为最后一张图片是复制的第一张图片,用户看到的是
        // 第一张图片)
        if(stepIndex >= $slideList.length){
            $wrapper.css('left',0); // 此时我们把wrapper的left值设置成0,container展示的还是第一张图片;再轮播就该轮播第二张,第
            // 二张图片的索引为1,所以stepIndex的值应该设置为1;
            stepIndex = 1;
        }
        // 让wrapper动画到： -1 * stepIndex * 图片宽度
        $wrapper.stop().animate({
            left: -1 * stepIndex * 1000,
        },500);
        changeFocus(); // 在这里实现调用焦点跟随的方法;
    }

// 4. 鼠标滑入container停止轮播,叫左右两个箭头显示出来;鼠标滑出时,重启自动轮播,把两个小箭头隐藏掉
    function handleContainer(){
        $container.on('mouseenter',function () {
            // 4.1 滑入时停止自动轮播
            clearInterval(autoTimer);
            // 4.2 让两个箭头出来
            $arrowLeft.css({
                display: 'block'
            });
            $arrowRight.css({
                display: 'block'
            })
        }).on('mouseleave', function () {
            // 重启自动轮播,再重新开一个定时器,就会继续自动轮播
            autoTimer = setInterval(autoMove, interval);
            // 让小箭头隐藏
            $arrowLeft.css({
                display: 'none'
            });
            $arrowRight.css({
                display: 'none'
            })
        })
    }
    // handleContainer();

// 5. 实现焦点跟随
// 焦点跟随:播第一张图片,第一个焦点选中,播第二个图片,第二个选中,而stepIndex控制着播哪个图片;焦点跟随就是把索引和stepIndex
// 相同的焦点设置为选中样式,其他的小点清除选中样式;
    function changeFocus(){
        let tmpIndex = stepIndex; // 因为stepIndex控制着轮播,所以我们复制一份stepIndex值,避免直接修改stepIndex
        if(tmpIndex === $slideList.length - 1){
            tmpIndex = 0;
        }
        $focusList.eq(tmpIndex).addClass('active').siblings().removeClass('active');
    }

// 6. 处理小箭头的点击事件
    function handleArrow(){
        // 6.1 右边的箭头的功能就是云播下一张,我们的autoMove方法专门用来 播下一张的;
        $arrowRight.click(autoMove); // click方法传一个回调函数,而autoMove是函数名,代表一个函数
        $arrowLeft.click(function () {
            // 点击左侧箭头切换到上一张,stepIndex控制着播哪张图, stepIndex++ 是播下一张,stepIndex--就是播上一张
            stepIndex--; // stepIndex减到0时,container里面展示的就是第一张图片了,如果再减我们需要展示真实的最后一张图片的内容
            // (因为前面为了实现无缝轮播,我们把第一张图片复制了一份放到了wrapper的末尾,length - 1 展示的还是第一张图片)
            if(stepIndex < 0 ){
                $wrapper.css('left', -($slideList.length - 1) * 1000);
                stepIndex = $slideList.length - 2;
            }
            // 让wrapper动画到指定位置
            $wrapper.stop().animate({
                left: -1 * stepIndex * 1000
            }, 500);
            // 焦点跟随
            changeFocus();
        });
    }
    // handleArrow();

// 7. 处理焦点的点击事件:点击第一个小点,container展示第一张图片,点击第二个小点,container展示第二张图片......,而stepIndex
// 控制着播放图片的索引,所以我们把stepIndex设置成被点击小点的索引;
    function handleFocus(){
        $focusList.click(function () {
            let index = $(this).index(); // this是原生对象, index() 是jq的方法,所以需要先把this转成jq对象,用$(this)方式;
            stepIndex = index;
            // 让wrapper动画到指定位置
            $wrapper.stop().animate({
                left: -1 * stepIndex * 1000
            }, 500);

            // 焦点跟随
            changeFocus();
        })
    }
    // handleFocus();

    return{
        init(){
            queryData();
            handleContainer();
            handleArrow();
            handleFocus();
            autoTimer = setInterval(autoMove,interval);
        }
    }
})();
bannerRender.init();
