$(function(){
	var ctx = $('#canvas')[0].getContext('2d');
	$('#canvas').on('touchmove', function(event) {
		event.preventDefault();
		var touches = event.originalEvent.touches;
		for (var i = 0; i < touches.length; i++) {
			var touch = touches[i];
			ctx.beginPath();
			ctx.arc(touch.pageX, touch.pageY, 20, 0, 2*Math.PI, true);
			ctx.fillStyle = 'rgba(255,0,0,0.1)';
			ctx.strokeStyle = 'rgba(100,100,100,0.1)';
			ctx.fill();
			ctx.stroke();
		}
	});
});