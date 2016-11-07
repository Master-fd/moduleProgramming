/**
 * Created by fenton-fd.zhu on 2016/11/7.
 */
//立即执行函数, 将每一页的全局变量resourceUrl变量传入
(function(resouceUrl){

    seajs.config({
        base : resouceUrl,
        alias : {   //配置公共模块
            "jquery" : "js/plugin/jquery-2.1.4/jquery.js",
            "base" : "js/common/base.js",
            "pop" : "js/tool/pop.js",
            "account" : "js/common/account.js"
        }
    })

    //加载每个页面独立的模块
    seajs.use(resouceUrl+"js/common/main.js");

})(resourceUrl);

