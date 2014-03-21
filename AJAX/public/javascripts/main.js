$(function () {


	$(document).on("click", "button", function() { 
	$.ajax('/counter', {
		success: function(data) {
			console.log(data);
				$(".myNumber").text(data)
		}
	});
});

});