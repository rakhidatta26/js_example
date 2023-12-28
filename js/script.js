// js

function textChange(){
	document.getElementById('t_h3').innerHTML="Rakhi";
}
function imageChange(){
	document.getElementById('img').innerHTML="Smile";
}
function dateTime(){
	document.getElementById('dt').innerHTML=Date();
}
function bulbOn(){
	document.getElementById('im').src="images/on.gif";
}
function bulbOff(){
	document.getElementById('im').src="images/off.gif"
}
function smile(){
	document.getElementById('SD').src="images/smile.jpeg";
}
function sad(){
	document.getElementById('SD').src="images/sad.jpeg";
}
function showBorder(){
	document.getElementById('SB').style.border="3px solid yellow";
}
function borderImage(){
	document.getElementById('SI').style.border="3px solid green";
}
function showText(){
	document.getElementById('tsh').style.display="block";
}
function hideText(){
	document.getElementById('tsh').style.display="none";
}
function showImage(){
	document.getElementById('SH').style.display="block";
}
function hideImage(){
	document.getElementById('SH').style.display="none";
}
// result
let x, y, z, result;
 x=10
 y=6
 z=8
 result=x+y-z 

 function showResult(){
 	document.getElementById('result').innerHTML=result;
 }
function fontSize(){
	document.getElementById('size').style.fontSize="40px";
}
function changeColor(){
	document.getElementById('color').style.color="blue";
}
function alertBox(){
	document.getElementById('alert').innerHTML=alert("This is an alert dialog box");  
}
function showLength(){
	var data=document.getElementsByTagName('h6');
	alert(data.length);
}
function cName(){
	document.getElementsByClassName('p')[1].innerHTML="Rakhi";
}
function changeBgColor() {
  document.getElementById("bg").style.backgroundColor = "aqua";
}
function showVari(){
	var x = 5;
	var y = 6;
	var z = x + y;
	document.getElementById("vari").innerHTML =
	"The value of z is: " + z;
}
function showlet(){
	let x = 5;
	let y = 6;
	let z = x + y;
	document.getElementById("let").innerHTML =z;
}
function showCons(){
	const x = 5;
	const y = 6;
	const result= x + y;
	document.getElementById("cons").innerHTML =result;
}

function showMix(){
	const price1 = 5;
	const price2 = 6;
	let total = price1 + price2;
	document.getElementById("mix").innerHTML =total;
}
function assign(){
let x = 5;
let y = 2;
let z = x + y;
document.getElementById("assign").innerHTML =z;
}
function multi(){
	let x = 5;
	let y = 2;
	let z = x * y;
document.getElementById("multi").innerHTML = z;
}
function stComparison(){
	let text1 = "A";
	let text2 = "B";
	let result = text1 < text2;
	document.getElementById("com").innerHTML = "Is A less than B? " + result;
}
function jsObj(){
	const car = {type:"Fiat", model:"500", color:"white"};
	document.getElementById("object").innerHTML =car.model;
}
function nDate(){
	const d = new Date();
	document.getElementById("new").innerHTML = d;
}
function dString(){
	const d = new Date("2023-12-25");
 document.getElementById("string").innerHTML = d;
}
function yMonth(){
	const d = new Date(2023, 11);
 	document.getElementById("ym").innerHTML = d;
}
function yDay(){
	const d = new Date(2023, 12,8,10);
 	document.getElementById("ymdh").innerHTML = d;
}
function ifElse(){
	const hour = new Date().getHours(); 
	let greeting;

	if (hour < 18) {
	  greeting = "Good day";
	} 
	else {
	  greeting = "Good evening";
	}
	document.getElementById("IE").innerHTML = greeting;
}

function forL(){
let text = "";

for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

document.getElementById("loop").innerHTML = text;
}