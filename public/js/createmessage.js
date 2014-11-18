var inner_html_header='<div id="showMessage"><div class="modal fade" id="messageBody" tabindex="-1" role="dialog" aria-hidden="true">'
				+ '<div class="modal-dialog">'
				+ '<div class="modal-content">'
				+ ' <div class="modal-header">'
				+ ' <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'
				+ ' </div>'
				+'<div class="modal-body">';
				
var inner_html_footer = '</div></div></div></div></div>';

var add_html = "";

function init(message){
	add_html = inner_html_header + message + inner_html_footer;
	$("body").append(add_html);
}
function distroy(){
	if($("#showMessage") != undefined){
		$("#showMessage").remove();
	}
}

function showVedio(){
	//distroy();
	if( !document.getElementById("showMessage")){
		var message="<video id='vedio'"
			+ " class='video-js vjs-default-skin' controls"
			+ " preload='auto'"
			+ " poster='img/logo_no_play.jpeg'"
			+ " style='background-color:#000;width: 100%;'>"
			+ " <source src='vedio/sf0814-1.mp4' type='video/mp4' />"
			+ " <p class='vjs-no-js'>"
			+	" To view this video please enable JavaScript, and considerupgrading to a web browser that " +
			+	" <a href='http://videojs.com/html5-video-support/' target='_blank'>supports HTML5 video</a>"
			+ " </p>"
			+ " </video>";
		init(message);
		$('#messageBody').on('shown.bs.modal', function (e) {
			var myVideo = document.getElementsByTagName('video')[0];
			myVideo.play();
		});
		$('#messageBody').on('hidden.bs.modal', function (e) {
			var myVideo = document.getElementsByTagName('video')[0];
	        myVideo.pause();
		});
	}
	
	$("#messageBody").modal('toggle');

}

function showMessage(message){
	distroy();
	init(message);
	$('#messageBody').on('shown.bs.modal', function (e) {
		var myVideo = document.getElementsByTagName('video')[0];
		myVideo.play();
	});
	$("#messageBody").modal('toggle');
	$('#messageBody').on('hidden.bs.modal', function (e) {
		var myVideo = document.getElementsByTagName('video')[0];
        myVideo.pause();
	});

}

