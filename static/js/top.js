// 悬停显示内容
$(function () {
    $("#navul > li").not(".navhome").hover(function () {
        $(this).addClass("navhover")
    }, function () {
        $(this).removeClass("navhover")
    })
})
