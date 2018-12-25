function startgame(){
	window.location.href="account.html";
}
function about(){
	window.location.href="about.html";
}
function Exit(){
	var x=confirm("do you want to close the game?");
	if(x==true){
		
		document.write("<h1 style='color:red;position:fixed;top:30%;left:25%;font-size:100px;'>The game Ended.</h1>")
		setTimeout(window.close,3000);
	}
}
function setbg(){
	var x=document.getElementById('aa');
	var y=document.getElementById('abc').value;
	x.style.backgroundColor=y;
}
var y=setInterval(SCREEN,1000);
function SCREEN(){
	if(window.innerWidth!=1366 || window.innerHeight!=655){
		alert("Full screen your browser's window");
	}
}