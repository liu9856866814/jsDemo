let obj = {
    name: 'mb', // 对象的属性名都是字符串类型的
    id: 17
};
let obj2 = {};

for (let key in obj){
    obj2[key] = obj[key]; // obj[key] 写在方括号中的key没有引号，就是变量，最终被添加到obj2中的属性是key变量代表的值；
    // 第一次遍历key代表'name'属性，所以第一次给obj2添加了一个'name'属性，值'mb',第二次key是‘id’添加的属性值是‘id’值是17；
    // 所以obj2 = { name: 'mb', id: 17};
}

let obj3 = {};
for (let attr in obj){
    obj3.attr = obj[attr]; // obj3.attr 写在.后面的attr属性是死的属性,不是变量,表示的就是'attr'属性,给obj3添加的属性就是'attr',
    // 第一次遍历给obj3添加'attr'属性,obj3 = {attr: 'mb'}; 第二次attr属性是有值的,就修改attr属性值 obj3['attr'] = 17;
}