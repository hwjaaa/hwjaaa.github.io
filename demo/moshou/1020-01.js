var box = document.getElementsByClassName("page_home_list_test_item")[0];       //获取div
var click = document.getElementsByClassName("mytest")[0];                       //获取span
var myacun = document.getElementsByClassName("abc")[0];
var box_one = document.getElementsByClassName("nav_right_item")[0];
var pic = document.getElementsByClassName("gutter_normal_pic");
var cheek = document.getElementsByClassName("gutter_normal_pic_01");
var test_color = document.getElementsByClassName("ArticleTile-title");
var nav = document.getElementsByClassName("con_nav_list_item")[0];
var diva = document.getElementsByClassName("site")[0];
var nav_a = document.getElementsByClassName("con_nav_list_item_02")[0];
var divb = document.getElementsByClassName("site_a")[0];
var left = document.getElementsByClassName("panel_left")[0];
var right = document.getElementsByClassName("panel_right")[0];
var appera = false;
var state = false;                                                                  //取反
click.onclick = function () {                //通过点击事件是div“page_home_list_test_item” 出现
    state = !state;
    if(state) {
        box.style.display="block";
    }else{
        box.style.display="none";
    }
}
myacun.onclick = function(){                 //通过点击事件使div“nav_right_item”出现
    appera = !appera;
    if(appera){
        box_one.style.display = "block";
    }else{
        box_one.style.display = "none";
    }
}
nav.onclick = function () {
    state = !state;
    if(state) {
        diva.style.display="block";
    }else{
        diva.style.display="none";
    }
}
nav_a.onclick = function () {
    state = !state;
    if(state) {
        divb.style.display="block";
    }else{
        divb.style.display="none";
    }
}
var scrollFunc = function (e) {
    var e = e || window.event;
    if (e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件
        if (e.wheelDelta > 0) { //当滑轮向上滚动时
            var scrollTop = $(document).scrollTop();
            if(scrollTop <= 100){="" $(".page_home_con_nav").animate({="" width:="" "1380px",="" height:"90px"="" })="" $(".page_home_con_nav="" .con_nav_list_ul,.page_home_con_nav="" .con_right_list_item="" ,.page_home_con_nav="" .con_right_list").animate({="" lineheight:"90px",="" height:"90px",="" border:"1"="" $(".con_right_list_item02").animate({="" margintop:"35px"="" $(".page_home_con_pic").animate({="" width:"293px",="" height:"118px"="" }).css({="" background:"url(logo-wow-cn.png)="" no-repeat",="" backgroundsize:"100%="" 100%"="" }="" if="" (e.wheeldelta="" <="" 0)="" {="" 当滑轮向下滚动时="" var="" scrolltop="$(document).scrollTop();" if(scrolltop="=" 0){="" "100%",="" height:"50px"="" lineheight:"50px",="" height:"50px",="" borderleft:"1px="" solid="" rgba(68,47,38,.5);"="" margintop:"15px"="" width:"50px",="" background:"url(logo-wowicon.png)="" no-repeat="" 10px="" 5px",="" backgroundsize:"40px="" 40px"="" else="" (e.detail)="" firefox滑轮事件="" (e.detail=""> 0) { //当滑轮向上滚动时 浏览器认为是向下滚动

        }
        if (e.detail < 0) { //当滑轮向下滚动时 浏览器认为是向上滚动

        }
    }
}
//给页面绑定滑轮滚动事件
if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
}
//滚动滑轮触发scrollFunc方法
document.onmousewheel = scrollFunc;

for(i=0;i</=>