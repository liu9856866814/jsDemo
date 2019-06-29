let box = document.getElementById('box');
box.onmousedown = dragStart;
function dragStart(e) {
    // 1. 记录鼠标初始位置
    this.startX = e.pageX;
    this.startY = e.pageY;
    // 2. 记录盒子初始left和top值
    this.startL = parseFloat(this.style.left);
    this.startT = parseFloat(this.style.top);
    // 3. 绑定点击事件
    this.DRAGM = dragMove.bind(this);
    this.DRAGE = dragEnd.bind(this);
    document.addEventListener('mousemove', this.DRAGM, false);
    document.addEventListener('mouseup', this.DRAGE, false);
}
function dragMove(e) {
    // 1. 计算当前盒子应该处于的位置
    let curL = e.pageX - this.startX + this.startL;
    let curT = e.pageY - this.startY + this.startT;
    // 2. 将元素设置到鼠标的位置
    this.style.left = `${curL}px`;
    this.style.top = `${curT}px`;
    // 4. 判断初始点击时记录初始位置，因为我们需要计算两次鼠标移动事件触发之间鼠标走过的距离，所以需要记录这个初始位置。
    if (!this.prevX) this.prevX = this.startX;
    this.hSpeed = e.pageX - this.prevX;
    this.prevX = e.pageX;
    // 5. 设置自由落体初速度
    this.dropSpeed = 5;
}
function dragEnd(e) {
    // 1. 移除事件
    document.removeEventListener('mousemove', this.DRAGM, false);
    document.removeEventListener('mouseup', this.DRAGE, false);
    // 2. 就算盒子的边界
    this.maxL = (document.documentElement.clientWidth || document.body.clientWidth) - this.offsetWidth;
    this.maxT = (document.documentElement.clientHeight || document.body.clientHeight) - this.offsetHeight;
    this.flyTimer = setInterval(() => fly.call(this), 20);
    this.dropTimer = setInterval(() => drop.call(this), 20);
}
function fly() {
    // 1. 计算速度
    this.hSpeed *= .98;
    // 2. 计算此时盒子应该处于的位置
    let l = parseFloat(this.style.left) + this.hSpeed;
    // 3. 过界判断，如果过界则修正，同时速度改变方向
    if (l > this.maxL) {
        // 盒子越过右边界了
        l = this.maxL;
        this.hSpeed *= -1;
    }
    if (l < 0) {
        // 盒子越过左边界
        l = 0;
        this.hSpeed *= -1
    }
    // 4. 将修正后的位置设置给盒子
    this.style.left = `${l}px`;
    // 5. 当速度小到一定程度时，盒子的位置改变量就很小了，所以此时就没必要在继续动画了，因为速度有正负，所以我们在判断当
    // 速度小于某个值的时候清除定时器，同时终止动画
    if (Math.abs(this.hSpeed) < 1) {
        clearInterval(this.flyTimer);
    }
}
function drop() {
    if (!this.n) this.n = 0;
    this.dropSpeed += 5;
    this.dropSpeed *= .98;
    let t = parseFloat(this.style.top) + this.dropSpeed;
    if (t > this.maxT) {
        t = this.maxT;
        this.dropSpeed *= -1;
        this.n++;
    } else {
        this.n = 0
    }
    this.style.top = `${t}px`;
    if (this.n > 2) clearInterval(this.dropTimer);
}