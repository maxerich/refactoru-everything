var outerShell = $('<div class="outershell"></div>');
var innerShell = $('<div class="innershell"></div>');
var amPmShell =$('<div class="ampmshell"></div>');
var am = $('<li class="labels">AM</li>');
var pm = $('<li class="labels">PM</li>');
var Auto = $('<li class="labels">AUTO</li>');
var clockScreen = $('<div class="clockscreen"></div>');
// var clockIndicator = 
var clockText = $('<p id="clocktext"></p>');
var amRadioBox = $('<div class="radioshell"></div>')
var amRadio = $('<p class="amradio"> AM 53 60 70 90 110 140 170</p>');
var pmRadio = $('<p class="pmradio"> PM 88 92 96 102 106 108</p>');

$("body").append(outerShell);
$(outerShell).append(innerShell);
$(innerShell).append(amPmShell);
$(innerShell).append(clockScreen)
$(amPmShell).append(am);
$(amPmShell).append(pm);
$(amPmShell).append(Auto);
$(clockScreen).append(clockText)
$(innerShell).append(amRadio)
$(innerShell).append(pmRadio)



function startTime() {
	var today = new Date();
	var h=today.getHours();
	var m=today.getMinutes();
// add a zero in front of numbers<10
	var m=checkTime(m);
	var s=checkTime(s);
	document.getElementById('clocktext').innerHTML=h+":"+m;
	 var t=setTimeout(function(){startTime()},500);
}

function checkTime(i) {
	if (i<10) {
  		i="0" + i;
    }
		return i;
}