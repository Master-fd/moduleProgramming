/**
 * Created by fenton-fd.zhu on 2016/11/7.
 */
define(function(require){

    window.$ = window.jQuery = require('jquery');
    window.base = require('base');  //加载公共模块

    var _page = $("#page").data('id');  //获取每个页面对应的id，这个id是独一无二的，加载相对应的模块

    switch (_page){
        case 'main':
            seajs.use(resourceUrl+'js/main/main.js');
            break;

        case 'backgroup':
            seajs.use(resourceUrl+'js/backgroup/backgroup.js');
            break;

        default :break;
    }
});