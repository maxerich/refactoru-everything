// Part 1
// $(document).ready(function() {


//	Food item/ingredients object class, toString method and DOM element///////

var Fooditem = function(name, calories, isVegan, isGF, isCF) {
	this.name = name;
	this.calories = calories;
	this.vegan = isVegan;
	this.glutenFree = isGF;
	this.citrusFree = isCF; 
}
Fooditem.prototype.toString = function() {
	var vegan = this.vegan ? "- vegan " : "";
	var gf = this.glutenFree ? "- gluten free " : "";
	var cf = this.citrusFree ? "- citrus free " : "";
	return this.name  + " - " + this.calories + "cal. " + vegan + gf + cf + "<br>" ;
}
Fooditem.prototype.create = function(){
	return $('<p class="food-item">' + this.toString() + '</p>');
}


//	Drink object class, toString method and DOM element/////////////////

var Drink = function(name, description, price, arrFoodItem) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = arrFoodItem
}
//	Evaluate if the drink is vegan:
Drink.prototype.isVegan = function(aryFoodItem){
	var veganCheck = true;
	for (var i=0; i<this.ingredients.length;i++){
		if (!this.ingredients[i].vegan){	
			veganCheck = false;
		}
	}
	return veganCheck;
};
//	Evaluate if the Drink is gluten free:

Drink.prototype.isGlutenFree = function(aryFoodItem){
	var gfCheck = true;
	for (var i=0; i<this.ingredients.length;i++){
		if (!this.ingredients[i].glutenFree){
			gfCheck = false;	
		}
	}
	return gfCheck;
};
//	Evaluate if the Drink is citrus free:

Drink.prototype.isCitrusFree = function(aryFoodItem){
	var citrusCheck = true;
	for (var i=0; i<this.ingredients.length;i++){
		if (!this.ingredients[i].citrusFree){
			citrusCheck = false;
		}
	}
	return citrusCheck;
};
Drink.prototype.toString = function() {
	return "<div class='plate curve' data-vegan=" + this.isVegan() +
	" data-gluten-free=" + this.isGlutenFree() + " data-citrus-free=" + 
	this.isCitrusFree() + "><h2 class='plate-name'>" + this.name + "</h2>" + 
	"<div class='price'><h2>" + this.price + "</h2></div>" + 
	"<p>" + this.description + "</p>" + 
	"<p>It has: " + 
	this.ingredients.join("") + " </p></div>";
};
Drink.prototype.create = function(){
	return $(this.toString());
};


//	Plate object class, toString method and DOM element /////////////
//	including dietary evulation


var Plate = function(name, description, price, arrFoodItem) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = arrFoodItem;
};

//	Evaluate if the plate is vegan:
Plate.prototype.isVegan = function(aryFoodItem){
	var veganCheck = true;
	for (var i=0; i<this.ingredients.length;i++){
		if (!this.ingredients[i].vegan){	
			veganCheck = false;
		}
	}
	return veganCheck;
};
//	Evaluate if the plate is gluten free:

Plate.prototype.isGlutenFree = function(aryFoodItem){
	var gfCheck = true;
	for (var i=0; i<this.ingredients.length;i++){
		if (!this.ingredients[i].glutenFree){
			gfCheck = false;	
		}
	}
	return gfCheck;
};
//	Evaluate if the plate is citrus free:

Plate.prototype.isCitrusFree = function(aryFoodItem){
	var citrusCheck = true;
	for (var i=0; i<this.ingredients.length;i++){
		if (!this.ingredients[i].citrusFree){
			citrusCheck = false;
		}
	}
	return citrusCheck;
};
Plate.prototype.toString = function() {
	return "<div class='plate curve' data-vegan=" + this.isVegan() +
	" data-gluten-free=" + this.isGlutenFree() + " data-citrus-free=" + 
	this.isCitrusFree() + "><h2 class='plate-name'>" + 
	this.name + "</h2>" + 
	"<div class='price'><h2>" + this.price + "</h2></div>" + 
	"<p>" + this.description + "</p>" + 
	"<p>It has: " + 
	this.ingredients.join("") + " </p></div>";
};
Plate.prototype.create = function(){
	return $(this.toString());
};

var Order = function(arrPlates) {
	this.plates = arrPlates;
};

//	Order object class, toString method and DOM element /////////////

Order.prototype.toString =  function() {
	var newarr = map(this.plates, function(item) {
		return  item.toString()
	});
	return newarr.join("")
};
Order.prototype.create = function(){
	return $('<div class="order">' + this.toString() + '</div>');
}

//	Menu object class, toString method and DOM element /////////////

var Menu = function(arrPlates) {
	this.plates = arrPlates;
};

Menu.prototype.toString =  function() {
	var newarr = map(this.plates, function(item) {
		return  item.toString()
	});
	return newarr.join("")
};
Menu.prototype.create = function(){
	return $('<div class="menu">' + this.toString() + '</div>');
}

//	Restaurant object class, toString method and DOM element /////////////

var Restaurant = function(name, description, menu) {
	this.name = name;
	this.description = description;
	this.menu = menu;
};
Restaurant.prototype.toString = function(){
	return this.name + "\n" +
		this.description + "\n" +
		this.menu;
}
Restaurant.prototype.create = function(){
	return $('<div class="restaurant">' + this.toString() + '</div>');
}

// Customer dietary preference class- need to be set////////

var Customer = function(dietaryPreference) {
	this.dietaryPreference = dietaryPreference;
};
Customer.prototype.toString = function(){
	return this.dietaryPreference;
};
Customer.prototype.create = function(){
	return $('<div class="customer">' + this.toString() + '</div>');
}


// food item object instantiation///////////////

var pizza = new Fooditem("pizza", 700, false, false, true);
var turduken = new Fooditem("turduken", 2000, false, true, true);
var broccoli = new Fooditem("broccoli", 40, true, true, true);
var fries = new Fooditem("fries", 300, true, false, true);
var water = new Fooditem("water", 0, true, true, true);
var sierraMist = new Fooditem("sierra mist", 90, true, true, false);
var grillCheese = new Fooditem("grilled cheese", 500, false, false, true);
var macNCheese = new Fooditem("mac and cheese", 800, false, false, true);
var hamburger = new Fooditem("hamburger", 1200, false, false, true);

var beer = new Fooditem("beer", 180, true, false, true);
var tortilla = new Fooditem("tortilla", 100, true, false, true);
var burritoFilling = new Fooditem("burrito filling", 600, false, false, false);
var avocado = new Fooditem("avocado", 250, true, true, true);
var salsa = new Fooditem("salsa", 150, true, true, false);
var tequila = new Fooditem("tequila", 69, true, true, true);
var margaritaMix = new Fooditem("margarita mix", 200, true, true, false);
var spanishRice = new Fooditem("spanish rice", 100, false, true, true);
var chips = new Fooditem("tortilla chips", 200, true, false, false);


// Plate item object instantiation/////////////////////////////////

var burritoPlate = new Plate("burrito plate", "burrito with rice and a beer", 12, [tortilla,burritoFilling,salsa,beer]);
var guacamolePlate = new Plate("guacamole plate", "guacamole with chips", 8, [chips, avocado, salsa]);
var MargaritaDrink = new Drink("margarita", "frozen margarita drink", 6, [tequila, margaritaMix]);

// Menu item object instantiation, from the three plates above//////////

var restaurantMenu = new Menu([burritoPlate, guacamolePlate, MargaritaDrink]);


// Diner object instantiation, from the three plates above//////////

var itDiner = new Restaurant("IT Diner", "Coolest Diner in the World", restaurantMenu);


// itDiner.toString();

// var Plate1 = new Plate("pizza plate", "lots of cheese", 8, [pizza, beer]);
// var Plate2 = new Plate("mac and cheese plate", "more cheese", 6, [macNCheese, broccoli, water]);
// var Plate3 = new Plate("hamburger plate", "juicy and nice", 10, [hamburger, fries, sierraMist]);

// var arrOfPlates = [Plate1, Plate2, Plate3];
// var newOrder = new Order(arrOfPlates);
// newOrder.toString();
// Handlebars DOM manipulation /////////////////////////////////////
// var source = $("#menu-content").html();
// var menuTemplate = Handlebars.compile(source);
// $(".left-column").append(menuTemplate(burritoPlate));

console.log(restaurantMenu.create());
$('.left-column').append(restaurantMenu.create());


var total = 0;

$(document).on("click", ".plate", function() {
	var price= +$(this).find(".price").text();
	var plateName = $(this).find(".plate-name").text()
	var newDiv = $("<div>" + plateName + "  " + price + "</div>")
	$(".right-column").append(newDiv);
});

$(document).on("click", ".plate", function() {
	var price= +$(this).find(".price").text();
	total += price;
	$(".price-total").text(total);
});


$(document).on("click", "button", function() {
	var data = $(this).data("diet");
	console.log(data);
	if (data === "vegan") {
		$('[data-vegan="true"]').removeClass().addClass("red");
		$(this).css("background-color","red");
	}
	else if (data === "gluten-free") {
		$('[data-gluten-free="true"]').removeClass().addClass("wheat");
		$(this).css("background-color","wheat");
	}
	else if (data === "citrus-free") {
		$('[data-citrus-free="true"]').removeClass().addClass("orange");
		$(this).css("background-color","orange");
	}
});



// });


