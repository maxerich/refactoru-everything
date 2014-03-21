$(document).ready(function() {
	var $form = $(".show-form")
	$form.click(function() {
		$("form").toggleClass("display");
		if($("form").hasClass("display")) {
			$(".show-form").text("Hide Form");
		}
		else {
			$(".show-form").text("Show Form");
		}
	});

	$(".submit").click(function(e) {
		e.preventDefault();
		var nametext = $(".name").val()
		var biotext = $(".bio").val()
		var booktext = $(".book").val()
		var libtext = $(".lib").val()
		// var newnametext = $("<h2>" + nametext + "</h2>")
		$(".titlename").empty();
		$(".biobody").empty();
		$(".bookbody").empty();
		$(".libbody").empty();
		$(".titlename").text(nametext);
		$(".biobody").text(biotext);
		$(".bookbody").text(booktext);
		$(".libbody").text(libtext);
	})





});

