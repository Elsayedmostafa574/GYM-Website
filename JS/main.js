$(document).ready(function(){
    $(window).scroll(function(){
        let x = $(window).scrollTop()
        if(x>500){
            $('.navbar').css({
                
                'background': 'black',
            
            })
          }else{
           $('.navbar').css({
             'background': 'transparent',
             'opacity':'1'
           })
          }
        })
        var scroll = new SmoothScroll('a[href*="#"]', {
            speed: 500
        });
        jQuery("#fittext").fitText();
      
    
})