// ==UserScript==
// @name        douyou
// @namespace   joehisaishi1943@gmail.com
// @description 豆邮！豆邮！
// @include     http*
// @version     10086
// @grant       none
// ==/UserScript==
// 标题
document.title = document.title.replace(/私信.*/g, '我的豆邮');
// 导航栏
var a1 = document.querySelector('#top-nav-doumail-link');
a1.textContent = a1.textContent.replace(/私信.*/g, '豆邮');
if (location.pathname.indexOf('people') != - 1) {
  // 发私信
  var a2  = document.querySelector('.user-opt');
  a2.innerHTML = a2.innerHTML.replace(/私信.*/g, '豆邮');
}
if (location.pathname.indexOf('doumail') != - 1) {
  // 豆邮页面
  document.querySelector('#content h1').innerHTML = '我的豆邮';
  // 右侧边栏
  var a3 = document.querySelector('.aside');
  a3.innerHTML = a3.innerHTML.replace(/私信.*/g, '豆邮');
  // tabs
  var a4 = document.querySelector('.doumail-toolbar');
  if (a4 != null) {
    a4.innerHTML = a4.innerHTML.replace(/私信.*/g, '豆邮');
  }
  // 「回应」按钮旁边的广告
  document.querySelector('.item-submit').innerHTML = '<span class="bn-flat"><input type="submit" name="m_reply" value="回应"></span>';
}
