(function (designWidth) {
    function computedFont() {
        let winW = document.documentElement.clientWidth || document.body.clientWidth;
        document.documentElement.style.fontSize = winW / designWidth * 100 + 'px';
    }
    computedFont();
    window.addEventListener('resize', computedFont);
    window.addEventListener('orientationchange', computedFont);
})(750);