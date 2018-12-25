var qu=document.getElementById('q');
var o1=document.getElementById('o1');
var o2=document.getElementById('o2');
var o3=document.getElementById('o3');
var o4=document.getElementById('o4');
var o5=document.getElementById('o5');
var i=0,j=0;
var save;
var x=20;
var score=0;
var wrong=0;
var arr = [];
while(arr.length <10){
    var r = Math.floor(Math.random()*11);
    if(arr.indexOf(r) == -1){
    	arr.push(r);
    }
}
showquestions();
var kk=setInterval(timeshow,1000);
function showquestions(){
	i=arr[j];
	qu.innerHTML=j+1+")"+q[i].question;
	o1.innerHTML=q[i].o1;
	o2.innerHTML=q[i].o2;
	o3.innerHTML=q[i].o3;
	o4.innerHTML=q[i].o4;
	o5.value=score;
	j=j+1;
}
function timeshow(){
	document.getElementById("time").innerHTML="Time remaining:"+x+"seconds";
	x=x-1;
	if(x<4)
	{
		document.getElementById('time').style.color='red';
	}
	else{
		document.getElementById('time').style.color='black';	
	}
	if(x==-1){
		x=20;
		wrong=wrong+1;
		if(wrong==3){
			alert("You have answered more than  three incorrect.");
			laststep();
		}
		setTimeout(showquestions,1000);
	}
}
function check(a){
	x=20;
	setTimeout(showquestions,500);
	if(a.innerHTML==q[i].ans){
		score=score+1;
	}
	else{
		wrong=wrong+1;
		if(wrong==3){
			alert("You have answered more than  three incorrect.");
			laststep();
		}
	}
	if(j==5){
		laststep();
		return ;
	}
}
function laststep(){
		alert("Your score is:"+score);
		save=prompt("Enter your name:","");
		checkcookie();
		window.location.href="mainpage.html";
}
function checkcookie(){
	var xx=document.cookie;
	var xx=xx.split(";");
	for(i=0;i<xx.length;i++){
		if(xx[i].indexOf(save)!=-1 && xx[i].indexOf("@sk.com")==-1){
			var yy=xx[i].split("=");
			alert(save+" your previous score was:"+yy[1]);
			break;
		}
	}
	var dd=new Date();
	dd.setTime(dd.getTime()+330*24*60*60*1000);
	var expires="expires="+dd.toGMTString();
	document.cookie=save + "=" + score + ";" + expires +";path=/";
}