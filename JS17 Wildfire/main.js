$(function() {
	$(".btn-info").click(function() { 
		$(this).toggleClass("active");
		$("li").click(function() {
		$(this).find("a").toggleClass("btn-info")
	})
	})
	$(".btn-danger").click(function() {
		$(this).toggleClass("active");
		$("li").click(function() {
		$(this).find("a").toggleClass("btn-danger")
	})
	})
	setInterval(function(){alert("Hello")},2000);



});



// var quote = function(text,author) {
// 	this.text = text;
// 	this.author = author;
// 	this.countWords = function() {
// 		return this.text.split(" ").length
// 	}
// 	this.create = function() {
// 		return $('<p>' + this.text +'</p>')
// 	}
// }

// var newQuote = new quote("Captain Underpants", "Dave Pilkey")




var Animal = function(name) {
	this.name = name;
	this.move = function() {
		console.log("Moving...");
	}
}

var Predator = function(name) {
	Animal.call(this, name);
	this.attack = function(prey) {
		console.log("I am hungry for " + prey.name);
	}
}

Predator.prototype = new Animal();

var snake = new Predator("Boa")

var mouse = new Animal("mousey")





//abstract classs
var Shape = function(name) {
	this.name = name
}




var Rectangle = function(name , w, l) {
	Shape.call(this, name);
	//instance variables/members
	this.w = w;
	this.l = l;
}
Rectangle.prototype = new Shape()

Rectangle.prototype.area = function() {
		return this.w * this.l 
}

var Square = new Rectangle("square", 3, 4)




var Circle = function(name, r) {
	Shape.call(this, name)
	this.r = r
 }

Circle.prototype = new Shape();

Circle.prototype.area = function() {
		return Math.PI * (this.r^2)
}

var oval = new Circle("oval", 5)







var Insect = function(name, friends) {
	this.name = name
	this.friends = friends
}



var Ant = function() {

}
Ant.prototype = new Insect();



var Bee = function(name, friends) {
	Insect.call(this, name, friends)
}
Bee.prototype = new Insect();

Bee.prototype.buzz = function() {
		console.log("buzzzzzzzz")
	}

Bee.prototype.pollinate = function(flower) {
	flower.pollinated = true
}




var Flower = function(color) {
	this.color = color;
	this.pollinated = false;
}



var bumble = new Bee()

var rose = new Flower("red")

























