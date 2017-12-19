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
            if(scrollTop <= 100){
                $(".page_home_con_nav").animate({
                    width: "1380px",
                    height:"90px"
                })
                $(".page_home_con_nav .con_nav_list_ul,.page_home_con_nav .con_right_list_item ,.page_home_con_nav .con_right_list").animate({
                    lineHeight:"90px",
                    height:"90px",
//                            border:"1"
                })
                $(".con_right_list_item02").animate({
                    marginTop:"35px"
                })
                $(".page_home_con_pic").animate({
                    width:"293px",
                    height:"118px"
                }).css({
                    background:"url(Logo-wow-cn.png) no-repeat",
                    backgroundSize:"100% 100%"
                })
            }
        }
        if (e.wheelDelta < 0) { //当滑轮向下滚动时
            var scrollTop = $(document).scrollTop();
            if(scrollTop == 0){
                $(".page_home_con_nav").animate({
                    width: "100%",
                    height:"50px"
                })
                $(".page_home_con_nav .con_nav_list_ul,.page_home_con_nav .con_right_list_item ,.page_home_con_nav .con_right_list").animate({
                    lineHeight:"50px",
                    height:"50px",
                    borderLeft:"1px solid rgba(68,47,38,.5);"
                })
                $(".con_right_list_item02").animate({
                    marginTop:"15px"
                })
                $(".page_home_con_pic").animate({
                    width:"50px",
                    height:"50px"
                }).css({
                    background:"url(Logo-wowIcon.png) no-repeat 10px 5px",
                    backgroundSize:"40px 40px"
                })
            }

        }
    } else if (e.detail) { //Firefox滑轮事件
        if (e.detail > 0) { //当滑轮向上滚动时 浏览器认为是向下滚动

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

for(i=0;i<pic.length;i++){
    pic[i].index = i;
    pic[i].onmouseover = function () {
        var index = this.index;
        for(var j=0;j<cheek.length;j++){
            cheek[j].style.border = "1px solid transparent";
            test_color[j].style.color = "#f8b700";
        }
        cheek[index].style.border = "1px solid #f8b700";
        test_color[index].style.color = "#ffffff";
    }
}
    left.onmouseover = function (){
        left.style.border = "1px solid #f8b700";
    }
    left.onmouseout = function (){
        left.style.border = "1px solid #504137";
    }
    right.onmouseover = function (){
        right.style.border = "1px solid #f8b700";
    }
    right.onmouseout = function (){
        right.style.border = "1px solid #504137";
    }