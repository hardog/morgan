var assert = require('assert');

// MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
// BLOG: http://bubkoo.com/2014/03/19/understanding-the-flag-g-of-JavaScript's-regular-expressions/
// 关于正则: /:([-\w]{2,})(?:\[([^\]]+)\])?/g
var regexp = /:([-\w]{2,})(?:\[([^\]]+)\])?/g;

var str1 = ':-a';
assert(str1.match(regexp) !== null);

var str2 = ':-1';
assert(str2.match(regexp) !== null);

var str3 = ':-_';
assert(str3.match(regexp) !== null);

var str4 = ':-a[anywords]';
assert(str4.match(regexp) !== null);

var str5 = ':-a[:anywords]';
assert(str5.match(regexp) !== null);

var str6 = ':a-b [anywords]';
// just match :a-b
assert(str6.match(regexp) !== null);

var str7 = ':res[content-length]';
assert(str7.match(regexp) !== null);


str7 = `:remote-addr ${str7} [:date]`;
/*[匹配示例]
当前被匹配到的字符数组 :remote-addr
第一个括号子串 remote-addr
第二个括号子串 undefined
被匹配文本在原字符串位置 0
原始被匹配文本 :remote-addr :res[content-length] [:date]
------- line break -------
当前被匹配到的字符数组 :res[content-length]
第一个括号子串 res
第二个括号子串 content-length
被匹配文本在原字符串位置 13
原始被匹配文本 :remote-addr :res[content-length] [:date]
------- line break -------
当前被匹配到的字符数组 :date
第一个括号子串 date
第二个括号子串 undefined
被匹配文本在原字符串位置 35
原始被匹配文本 :remote-addr :res[content-length] [:date]
------- line break -------
 */
str7.replace(/:([-\w]{2,})(?:\[([^\]]+)\])?/g, function(match, p1, p2, offset, string){
    // 因为是全局匹配, 该函数会被调用多次
    console.log('当前被匹配到的字符数组', match);
    console.log('第一个括号子串', p1);
    console.log('第二个括号子串', p2);
    console.log('被匹配文本在原字符串位置', offset);
    console.log('原始被匹配文本', string);
    console.log('------- line break -------');
});



