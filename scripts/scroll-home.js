var arrow1 = $(".arrow-down-box .arrow-down");
 
arrow1.click(function(){scroll("#scroll-id")});


function scroll(next){
    var id = next;
    
    var offset = $(id).offset();
    offset.top = offset.top - 100;
    var speed = 1500;
 
    $("html, body").animate({
      scrollTop: offset.top
    }, {
      duration: speed,
      easing: "easeInOutCubic"
    });
    

}
