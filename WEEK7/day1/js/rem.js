// ; 是前面行的结尾，防止前面不写分号
;(function (designWidth) {
    function computedFont() {
        // 获取视口的宽度
        let winW = document.documentElement.clientWidth;
        document.documentElement.style.fontSize = winW / designWidth * 100 + 'px';
    }
    computedFont();
    window.addEventListener('resize', computedFont);
    window.addEventListener('orientationchange', computedFont);
})(750);