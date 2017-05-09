/**
 * VIDEO
 */
// handle webcam
// Grab elements, create settings, etc.
$("#camera").click(function (){
	var video = document.getElementById('webcam');
	// Get access to the camera!
	if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
	    // Not adding `{ audio: true }` since we only want video now
	    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
	        video.src = window.URL.createObjectURL(stream);
	        video.play();
	    });
	}
});

// Elements for taking the snapshot
var canvas = document.getElementById('character-picture');
var context = canvas.getContext('2d');
var video = document.getElementById('webcam');

// Trigger photo take
$("#trigger-camera").click(function(){
	var w = video.offsetWidth;
	var h = video.offsetHeight;
	context.drawImage(video, 0, 0, 300, 150);
	window.location = "#close-camera";
	$("#character-picture").attr("class", $("#webcam").attr("class"));
});

/*FILTERS TRIGGER*/
$("#trigger-filter-classic").click(function(){
	$("#webcam").attr("class", "classic");
});
$("#trigger-filter-grayscale").click(function(){
	$("#webcam").attr("class", "grayscale");
});
$("#trigger-filter-sepia").click(function(){
	$("#webcam").attr("class", "sepia");
});
$("#trigger-filter-blur").click(function(){
	$("#webcam").attr("class", "blur");
});

/* Gallery */
$(".gallery-picture").click(function(){
	var img = $(this).find("img")[0];
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.drawImage(img, 0, 0, 300, 150);
});