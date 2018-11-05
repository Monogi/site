function someFunc(){
alert(document.getElementById("reg-telephone").value);
alert(document.getElementById("reg-adress").value);
alert(document.getElementById("first-name").value);
alert(document.getElementById("reg-time").value);
	alert(document.getElementById("zakaz").value);
}
document.getElementById("go-key").onclick = someFunc;
