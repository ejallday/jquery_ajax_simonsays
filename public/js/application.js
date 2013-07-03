$(document).ready(function(){
	$("#get_color").on('click', function(event){
		event.preventDefault;
		$.post('/color', function(data) {
			$("li").eq(data.cell - 1).css("background-color", data.color);
		});
	});
});