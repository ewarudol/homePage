function isInViewport(elem) {
  var elementTop = $(elem).offset().top;
  var elementBottom = elementTop + $(elem).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

var table = [];

$(window).on('resize scroll', function() {
   
    var hexs = $('.hex-image');
    var qHexs = hexs.length;
    var last;
    
    hexs.each(function(index) {
        
    var idx = index + 1; 
        
    if(idx < qHexs && !table.includes(idx))
    {
        
        var dist = $(".skill-box:nth-child("+(idx+1)+") .center-line").offset().top - $(".skill-box:nth-child("+idx+") .center-line").offset().top;


        if (isInViewport(this))
        {      
            table.push(idx);
            console.log(table);
            
            $(".skill-box:nth-child("+idx+") .center-line").delay(400).animate(
            {
            height: dist
            },1000,
            'easeInQuint'  
            );    
                        
            var elem = $(".skill-box:nth-child("+idx+") .title_end");
            var classes =  $(elem).parent().attr('class');
            $(elem).parent().attr('class', 'animate');
            
            $(".skill-box:nth-child("+idx+") .animate").hide();
            $(".skill-box:nth-child("+idx+") .animate").delay(400).fadeTo(1000, 1, 'easeInQuint');
            
            var indicator = $(elem);
            setTimeout(function(){ 
            $(indicator).parent().addClass(classes);
            },1500);  
            
            $(".skill-box:nth-child("+idx+") .underline").delay(400).animate(
            {
            width: 200
            },1000,
            'easeInQuint'  
            ); 
            
            $(".skill-box:nth-child("+idx+") .lvl-desc-box").hide();
            $(".skill-box:nth-child("+idx+") .lvl-desc-box").delay(400).fadeTo(1000, 1, 'easeInQuint');
            
            $(".skill-box:nth-child("+idx+") .arrow-down-box").hide();
            $(".skill-box:nth-child("+idx+") .arrow-down-box").delay(400).fadeTo(1000, 1, 'easeInQuint');
            
        } 
        else {

        }
        
        
    }
      
  });
});


