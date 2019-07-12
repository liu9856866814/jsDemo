function mouseHover(ele,hoverEle) {
    ele = $(ele);
    hoverEle = $(hoverEle);
    ele.on('mouseenter',function () {
        hoverEle.css({
            display: 'block'
        });
        ele.css({
            background:'#fff',
            borderLeft: '1px solid #ddd'
        });
    }).on('mouseleave',function () {
        hoverEle.css({
            display: 'none'
        });
        ele.css({
            background:'#f4f4f4',
            borderLeft: '1px solid #f5f5f5'
        });
    });
    hoverEle.on('mouseenter',function () {
        hoverEle.css({
            display: 'block'
        });
        ele.css({
            background:'#fff',
            borderLeft: '1px solid #ddd'
        });
    }).on('mouseleave',function () {
        hoverEle.css({
            display: 'none'
        });
        ele.css({
            background:'#f4f4f4',
            borderLeft: '1px solid #f5f5f5'
        });
    })

}
mouseHover('.nav-top-selectArea','.allArea');
mouseHover('.right-one','.allArea0');

let J_QrFt = $('.J_QrFt');
J_QrFt.click(function () {
    $('.tbh-qr').css('display', 'none');
});

let serviceListLi = $('.banner-list-one');
serviceListLi.on('mouseenter',function () {
    $('.service-float').css('display', 'block');
    $('.service-float-item').css('display','block').siblings().css('display','none');
});

// banner 左侧的列表hover展示更多内容
function bannerListHover(ele,eleHover,item){
    ele = $(ele);
    eleHover = $(eleHover);
    ele.on('mouseenter',function () {
        eleHover.css('display', 'block');
        $(item).css('display','block').siblings().css('display','none');
    }).on('mouseleave', function () {
        eleHover.css('display','none');
    });
    eleHover.on('mouseenter', function () {
        eleHover.css('display', 'block');
        $(item).css('display','block').siblings().css('display','none');
    }).on('mouseleave', function () {
        eleHover.css('display','none');
    })
}
bannerListHover('.banner-list-one', '.service-float','.item0');
bannerListHover('.banner-list-two', '.service-float','.item1');

var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: true,
    effect : 'coverflow',
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
let bannerArrow = $('.arrow');
function arrowShow(ele){
    let bannerArrow = $(ele +' .arrow');
    $(ele).on('mouseenter',function () {
        bannerArrow.css({
            display: 'block'
        });
    }).on('mouseleave',function () {
        bannerArrow.css({
            display: 'none'
        })
    });
}
arrowShow('.promo-bd');
arrowShow('.tmall-bd');

var mySwiper2 = new Swiper ('.swiper-container2', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: true,
    effect : 'coverflow',
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

