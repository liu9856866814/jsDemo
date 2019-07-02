// 页面中有一个点坐标（x,y）,求这个点和x，y轴、原点围成图形的面积；
// 要求：
let v = new Part(1, 5);
v.area(); // 5;

class Part {
    constructor (x, y){
        // 因为点的坐标可能是负值，但面积不能是负值，所以要取绝对值
        this.x = Math.abs(x);
        this.y = Math.abs(y);
    }
    area (){
        return this.x * this.y;
    }
}
// 升级版
// 有两个点的坐标（x1,y1）和（x2,y2）求这两个点和x轴的夹角； 注：斜率



