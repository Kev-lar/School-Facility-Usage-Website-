// Event Class

var event = {description: "", sDate:"", eDate:"", facility, maxUsers:0, minUsers, ID:0};

function addEvent(description, sDate, eDate, facility, maxUsers, minUsers, ID){
	"use strict";
	var x = new event(description, sDate, eDate, facility, maxUsers, minUsers, ID);
	
}
function removeEvent(event){
	event.description = null;
	event.sDate = null;
	event.eDate = null;
	event.maxUsers = null;
	event.minUsers = null;
}

