let $tabHeader = $('.header > li');
let $tabCard = $('#tabBox > div');

/*$tabHeader.click(function () {
    // console.log($(this))
    $(this).addClass('active')
        .siblings()
        .removeClass('active');
    let index = $(this).index(); // 获取 当前被点击元素的索引
    // console.log(index);
    $tabCard.eq(index) //获取索引为index的卡片
        .addClass('active')
        .siblings()
        .removeClass('active');
});*/

$tabHeader.click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    let index = $(this).index();
    $tabCard.eq(index).addClass('active').siblings().removeClass('active');
})