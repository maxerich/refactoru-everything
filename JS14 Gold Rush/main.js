var pirate = $('<img src="http://theflagman.co.uk/images/P2080008.JPG" class="pirate">');

// var textbox = $("<div class="outertextbox"><input type="text" name="FirstName" placeholder="Enter a note!"></div>")


$(document).ready(function() {

	$(".map").on("click", function(event) {
		var xCord =  event.pageX - 25;
		var yCord = event.pageY  -25;
		var outertextbox = $('<div class="outertextbox"></div>');
		var pirate = $('<img src="http://theflagman.co.uk/images/P2080008.JPG" class="pirate">');
		var textbox =  $('<input type="text" name="FirstName" placeholder="Enter a note!" class="textbox">')
		$(".container").append(outertextbox);
		outertextbox.css("left", xCord + "px");
		outertextbox.css("top", yCord + "px");
		outertextbox.append(pirate)
		var note =  prompt("Enter a note that will be saved for future generations of gold diggers!")
		outertextbox.append(textbox)
		textbox.val(note)
		textbox.css("left", "70px");
		textbox.css("display", "none");
	})
	$(document).on("mouseover", ".outertextbox", function() {
		$(this).find(".textbox").css("display", "block")
	})
	$(document).on("mouseout", ".outertextbox", function() {
		$(this).find(".textbox").css("display", "none")
	})
	// $(document).on("mouseenter", ".pirate", function() {
	// 	// var xCord =  event.pageX - 25;
	// 	// var yCord = event.pageY  - 25;
	// 	var textbox =  $('<input type="text" name="FirstName" placeholder="Enter a note!" class="textbox">')
	// 	$(this).parent().append(textbox);
	// 	textbox.css("left", "70px");
	// 	// textbox.css("top",  "50px");
	// })
	$(document).on("click", ".pirate", function() {
		$(this).parent().remove()
	})
})






  // var marker = new google.maps.Marker({
  //     position: myLatlng,
  //     map: map,
  //     title: 'Hello World!'
  // });



