
// handle webcam
// Grab elements, create settings, etc.
$("#camera").click(function (){
	alert("toto");
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