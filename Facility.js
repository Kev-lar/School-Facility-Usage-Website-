// Facility Class 
var facility = {school: "", , sfacility: "", price: 0, id : 0, availability : true, phone: 0, size: 0 , }
function bookFacility(facility){
	if(facility.availability == true){
		facility.availability = false;
		return true;
	}

}
function addFacility(school, sfacility, price, id, availability, phone, size){
	 var x = new facility(school, sfacility, price, id, availability, phone, size,);
	
}
function deleteFacility(facility){
	facility.address ="";
	facility.price = null;
	facility.id = null;
	facility.availability = null;
	faclity.phone = null;
	facility.size = null;
}

