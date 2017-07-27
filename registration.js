//window.addEventListener("load", init);
function login() {
	var userid = document.getElementById("userid").value;
	var pass = document.getElementById("pass").value;
	var usermail = document.getElementById("usermail").value;
	if (userid == "Guest" && usermail == "abc@gmail.com" && pass == "1234") {
		window.location.assign("main.html");
		console.log("i m here");
	}
}