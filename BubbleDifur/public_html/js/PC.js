/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = function() {
jQuery(function() {
            jQuery('img[usemap]').rwdImageMaps();
            jQuery('.map').maphilight();
            jQuery(window).resize(function() {
      		jQuery('.map').maphilight();
            });
        });
        
    $(document).ready(function(){
        $('area[href*=#]').bind("click", function(e){
            var anchor = $(this);
            $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top}, 1000);
                e.preventDefault();
        });        
        
        return false;       
       
    });
};


