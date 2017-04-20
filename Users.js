// Users Class
var user = {name:"", email:"", username:"", password:"", phone:0};
function resetPass(user, newPassword){
	"use strict";
	user.password = newPassword;
	if(newPassword === user.password){
		window.alert("New password cannot be the same as the current password");
	}
}
function updateInfo(user, newEmail, newUsername, newPhone){
	"use strict";
	user.email= newEmail;
	user.username = newUsername;
	user.phone = newPhone; 
}
var admin = {name:"", email:"", username:"", password:"", phone:0 , ID: 0};
function resetPass2(admin, newPassword){
	"use strict";
	admin.password = newPassword;
	if(newPassword === admin.password){
		window.alert("New password cannot be the same as the current password");
	}
}
function updateInfo2(admin, newEmail, newUsername, newPhone){
	"use strict"
	user.email= newEmail;
	user.username = newUsername;
	user.phone = newPhone; 
}