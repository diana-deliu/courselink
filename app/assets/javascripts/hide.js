
$(document).ready(function() {

	function checkHidden() {
		$('.question div').each( function(i){
            var obj_bottom = $(this).position().top + $(this).outerHeight();
            var wnd_bottom = $(window).scrollTop() + $(window).height();

            if(wnd_bottom > obj_bottom) {
				$(this).animate({'opacity':'1'}, 500);  
            }
        }); 
	}
	
	checkHidden();
    
    $(window).scroll( function(){
        checkHidden();
    });
    
});
