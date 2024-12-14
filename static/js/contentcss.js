// 轮播图片宽度
var imgwidth = 260;
// 展示图片数量
var size=4
// 轮播图片总数
var total="";
// 动态生成轮播属性
$(document).ready(function () {
    var specialcontainer = document.getElementsByClassName('special_container')
    var specialbanner = document.getElementsByClassName('special_banner')
    var specialimg = document.getElementsByClassName('specialimg')
    // 克隆元素（cloneNode）要用byid才可以
    var cloneimg = document.getElementById('special_banner')
    total = specialimg.length
    var imgs=cloneimg.children
    // var first_slider = cloneimg.firstElementChild.cloneNode(true)
    if (total>=size){
        for( n=0;n<size;n++){
            var slider = imgs[n].cloneNode(true)
            $(".special_banner").append(slider)
        }
    }
    // $(".special_banner").append(first_slider)
    // 插入一个用于无缝切换
    var imglength=specialimg.length + 1
    // 边距为20
    // specialcontainer[0].style.width = (imgwidth+20)*4+'px'
    specialbanner[0].style.width = imglength * (imgwidth + 20 )+ 'px'
    specialbanner[0].style.transition = '0.5s ease'
    specialbanner[0].style.left = '0px'
})
