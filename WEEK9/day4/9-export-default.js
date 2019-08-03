// 在前面的例子中,我们要想导入,必须知道导出时名字都是什么,如果不知道没办法导入 ;

// ESModule 提供了一个默认导出

export default function sum(a, b) {
    return a + b;
}

// 一个模块的默认导出只能有一个,多了报错 语法错误,重复声明

/*export default function minus(a, b) {
    return a + b;
}*/
