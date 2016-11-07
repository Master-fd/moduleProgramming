/**
 * Created by fenton-fd.zhu on 2016/11/7.
 */
define(function(require, exports) {

    var operation = {


        loing : function(){
            return 'login';
        },

        register : function(){
            return 'register';
        },

        islogin : function(){
            return operation.login;
        }


    };

    exports.islogin = function(){

        operation.login = true;
        return operation.islogin();
    }
});