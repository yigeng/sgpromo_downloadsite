$("#overlay_open").click(function(){
  $("video").prop("controls", false);
  $("video").css("opacity", 0);
});

$("#overlay_close").click(function(){
  $("video").prop("controls", true);
  $("video").css("opacity", 1);
});

var flag=true;
$(function(){
	//var player = videojs('video');
	
	$("#show_video").click(function(){
		alert("a");
		//player.play();
		showVedio();
//		$("#video").attr('style','mix-width: 320px;height: 100%;z-index:1;position:absolute;top: 0;left: 0;');
//		if(flag){
//			$("#overlay_img").css("opacity", 0);
//			player.play();
//		}else{
//			$("#overlay_img").css("opacity", 1);
//			player.pause();
//		}
		
		
	});
	$("#help").click(function(){
		$("#readme").toggle(500);
	});
	
});

function playPause() {
    var myVideo = document.getElementsByTagName('video')[0];
    if (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
}