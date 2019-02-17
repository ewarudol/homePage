var arrow0 = $(".home-arrow .arrow-down");
var arrow1 = $("#skill-num-1 .arrow-down-box .arrow-down");
var arrow2 = $("#skill-num-2 .arrow-down");
var arrow3 = $("#skill-num-3 .arrow-down");
var arrow4 = $("#skill-num-4 .arrow-down");
var arrow5 = $("#skill-num-5 .arrow-down");
var arrow6 = $("#skill-num-6 .arrow-down");
var arrow7 = $("#skill-num-7 .arrow-down");
 
arrow0.click(function(){scroll(1)});
arrow1.click(function(){scroll(2)});
arrow2.click(function(){scroll(3)});
arrow3.click(function(){scroll(4)});
arrow4.click(function(){scroll(5)});
arrow5.click(function(){scroll(6)});
arrow6.click(function(){scroll(7)});
arrow7.click(function(){scroll(8)});

function scroll(nextHex){
    var id = '#skill-num-' + nextHex + ' .hex-box img';
    
    var offset = $(id).offset();
    offset.top = offset.top - 100;
    var speed = 1500;
 
    if(nextHex!=1)
    {
        $("html, body").animate({
          scrollTop: offset.top
        }, {
          duration: speed,
          easing: "easeInOutBack"
        });
    }
    else{
         $("html, body").animate({
          scrollTop: offset.top
        }, {
          duration: speed,
          easing: "easeInOutCubic"
        });
        
    }
}
