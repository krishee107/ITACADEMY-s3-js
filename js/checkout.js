
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	var errorAddress = document.getElementById("errorAddress");  
	var errorLastN = document.getElementById("errorLastN");  
	var errorPassword = document.getElementById("errorPassword");  
	var errorPhone = document.getElementById("errorPhone");  

	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == ""     || fName.value.lenth < 3  || /[0-9]/.test(fName.value) ){
		errorName.style.display = "block";
		error++;
	}

	if(fEmail.value == ""    || fEmail.value.lenth < 3 || !/\S+@\S+\.\S+/.test(fEmail.value)){
		errorEmail.style.display = "block";
		error++;
	}
	if(fAddress.value == ""  || fAddress.value.lenth < 3 ){
		errorAddress.style.display = "block";
		error++;
	}
	if(fLastN.value == ""    || fLastN.value.lenth < 3  || /[0-9]/.test(fName.value) ){
		errorLastN.style.display = "block";
		error++;
	}
	if(fPassword.value == "" || fPassword.value.lenth < 3 || !/[0-9]/.test(fPassword.value) 
	|| !/[a-zA-Z]/.test(fPassword.value)){
		errorPassword.style.display = "block";
		error++;
	}
	if(fPhone.value == ""    || fPhone.value.lenth < 9  || /[a-zA-Z]/.test(fPhone.value) ){
		errorPhone.style.display = "block";
		error++;
	}


	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}
