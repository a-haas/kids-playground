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
	context.drawImage(video, 0, 0, w, h);
	window.location = "#close-camera";
});

/**
 * AUDIO
 */

$("#microphone").click(function (){
	var video = document.getElementById('webcam');
	// Get access to the camera!
	if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
	    // Not adding `{ audio: true }` since we only want video now
	    navigator.mediaDevices.getUserMedia({ audio: true }).then(function(stream) {
	        video.src = window.URL.createObjectURL(stream);
	        video.play();
	    });
	}
});