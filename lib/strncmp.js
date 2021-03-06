// Create global namespace
if(typeof(phpjs) === 'undefined')
  phpjs = {};
  
// from http://phpjs.org/functions/strncmp:543
phpjs.strncmp=function(str1, str2, lgth) {
    // Binary safe string comparison  
    // 
    // version: 1109.2015
    // discuss at: http://phpjs.org/functions/strncmp
    // +      original by: Waldo Malqui Silva
    // +         input by: Steve Hilder
    // +      improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +       revised by: gorthaur
    // + reimplemented by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: strncmp('aaa', 'aab', 2);
    // *     returns 1: 0
    // *     example 2: strncmp('aaa', 'aab', 3 );
    // *     returns 2: -1
    var s1 = (str1 + '').substr(0, lgth);
    var s2 = (str2 + '').substr(0, lgth);
 
    return ((s1 == s2) ? 0 : ((s1 > s2) ? 1 : -1));
}
