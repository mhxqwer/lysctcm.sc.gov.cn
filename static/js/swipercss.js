$(document).ready(function () {
   
    // 克隆元素（cloneNode）要用byid才可以
    var wrapper = document.getElementById('swiperWrapper')
    var first_slider = wrapper.firstElementChild.cloneNode(true)
   $(".swiperWrapper").append(first_slider)
    
  var swiperWrapper = document.getElementsByClassName('swiperWrapper')
    var swiperSlider = document.getElementsByClassName('swiperSlider')
    swiperWrapper[0].style.width = (swiperSlider.length) * width + 'px'




    var iconbtns = document.querySelectorAll('.iconbtn')
    iconbtns[0].classList.add("active")
})




