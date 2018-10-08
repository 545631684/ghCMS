// highlight.js  代码高亮指令
import Vue from 'vue';
import Hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
 
Hljs.configure({
	useBR: false, // \n || <br>;用于<br>在输出中生成标记而不是换行符的标志，在使用非<pre>容器标记代码时非常有用。false时是'\n',
	tabReplace: '  ' //用于替换缩进中的TAB字符的字符串,不设置默认是4个空格，这里是对代码的缩进设置，但也可以设置其它字符串
});
let Highlight = {};
Highlight.install = function (Vue, options) {
    // 先有数据再绑定，调用highlightA
    Vue.directive('highlightA', {
        inserted: function(el) {
            let blocks = el.querySelectorAll('pre code');
            for (let i = 0; i < blocks.length; i++) {
                const item = blocks[i];
                Hljs.highlightBlock(item);
            };
        }
    });
 
    // 先绑定，后面会有数据更新，调用highlightB
    Vue.directive('highlightB', {
        componentUpdated: function(el) {
            let blocks = el.querySelectorAll('pre code');
            for (let i = 0; i < blocks.length; i++) {
                const item = blocks[i];
                Hljs.highlightBlock(item);
            };
        }
    });
 
};
 
export default Highlight;