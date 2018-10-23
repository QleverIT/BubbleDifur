/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function() {
   
    
    function vidplay() {
      var video = document.getElementById("Video1");
          video.play();
    }

    function vidpaused() {
      var video = document.getElementById("Video1");
          video.pause();
    }


    function effects(begin_time,end_time) {
     var video = document.getElementById("Video1");
      video.play();
        video.currentTime = begin_time;
        setTimeout("vidpaused()",(end_time-begin_time)*1000);
    } 
 
};
   



