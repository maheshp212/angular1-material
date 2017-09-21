'use strict';

var AppUtil = {
    gethexa : function(a) {
        return a.toString(16);
    },
    convertArraytoURLParms: function($arrayObj)
    {
        var returnUrl = '?';
        angular.forEach($arrayObj, function(value, key) {
            returnUrl += '&' + key + '=' + value;
        });

        return returnUrl;
    }
};
