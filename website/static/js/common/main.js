/**
 * Created by fenton-fd.zhu on 2016/11/7.
 */
define(function(require){

    window.$ = window.jQuery = require('jquery');
    window.base = require('base');  //���ع���ģ��

    var _page = $("#page").data('id');  //��ȡÿ��ҳ���Ӧ��id�����id�Ƕ�һ�޶��ģ��������Ӧ��ģ��

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