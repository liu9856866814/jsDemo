// 一般真实项目中用到事件总线,只有一个; 用的时候从这个模块中导出即可;

import Vue from 'vue.js'; // 现在浏览器直接导入还不行,但是用vue-cli 或者webpack就可以
export default new Vue;
