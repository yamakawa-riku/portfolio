$(function(){
  $('.btn-gnavi').on('click',function(){
    var rightVal = 0;
    if($(this).hasClass('hb-open')){
      rightVal = -9999;
      $(this).removeClass('hb-open');
    }else{
      $(this).addClass('hb-open');
    }

    $('.header-list').stop().animate({
      right: rightVal
    }, 200);
  });
});
