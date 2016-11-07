/**
 * Created by fenton-fd.zhu on 2016/11/7.
 */


define(function(require){

    var $body = $("body");
    var $main = $("#page");
    console.log($main);
    $main.on('click', '.tap', function(){
        console.log('click');
        $('.tap').addClass('tapActive');
    });
});