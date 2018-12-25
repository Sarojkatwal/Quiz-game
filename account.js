var s=0;
function checkaccount(){
	var x=confirm("If you have account press OK.");
	if(x==true){
		document.getElementById("div1").style.display="none";
	}
	else{
		document.getElementById("div2").style.display="none";
	}
}
function showpass(e,ch){
	if(e.checked)
	{
		document.getElementById(ch).type="text";
	}
	else{
		document.getElementById(ch).type="password";
	}
}
function checkusername(e){
	var k=e.value;
	if(k.lastIndexOf("@sk.com")!=k.length-7){
		alert("Username must end with @sk.com");
		return true;
	}
}
function saveid(ch1,ch2){
	if(checkusername(document.getElementById(ch1))){
	}
	else if(document.getElementById(ch2).value.length==0){
		alert("Enter non empty password!!");
	}
	else if(cup(document.getElementById(ch1).value)==true){
		alert("Username already present!!Try with another username!!");
	}
	else{
		var d=new Date();
		d.setTime(d.getTime()+255*24*60*60*1000);
		var expires="expires="+d.toGMTString();
		document.cookie=document.getElementById(ch1).value+"="+document.getElementById(ch2).value+";"+expires+";path=/";
		document.getElementById("div1").style.display="none";
		document.getElementById("div2").style.display="block";
	}
}
function cup(ch3){
	var XX=document.cookie;
	var XX=XX.split(";");
	for(i=0;i<XX.length;i++){
		if(XX[i].indexOf(ch3)!=-1){
			return true;
		}
	}
}
function checkidpass(ch4,ch5){
	var A=document.getElementById(ch4);
	var B=document.getElementById(ch5);
	var C=" "+A.value+"="+B.value;
	var XX=document.cookie;
	var XX=XX.split(";");
	if(checkusername(A)==true){
		return false;
	}
	else if(B.value.length==0){
		alert("Donot enter empty string as password!!!");
		return false;
	}
	else{
		for(var i=0;i<XX.length;i++){
			if(XX[i]==C){
				alert("Username and password are matched!!!");
				window.location.href="startgame.html";
				return true;
			}
	}
	alert("Username or password not found!!");
	A.value="";
	B.value="";
	return false;
	}
}


