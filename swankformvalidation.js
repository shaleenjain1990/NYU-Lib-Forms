function checkIt(form) 
{
    var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var netid = document.getElementById("field1").value;
	var nyuLocation = document.getElementById("field6").value;
	var nyuClassesURL = document.getElementById("field8").value;
	var question = document.getElementById("question").value;
	if(!name || !email || !netid || !nyuClassesURL || !question)
	{
		alert("Please enter all required fields");
		return false;
	}
	else if(validateEmail(email)==false)
	{
		alert("Please enter a valid email address");
		return false;
	}
	else if(nyuLocation == "Select one")
	{
	    alert("Please select NYU Location");
		return false;
	}
	else if(nyuClassesURL.substring(0,39) != "https://newclasses.nyu.edu/portal/site/" || nyuClassesURL.split("/")[5].length != 36)
	{
	    alert("Please enter valid NYU Classes URL");
	    return false;
	}
	else
	{
		document.getElementById("field8").value = "NYU Classes URL: " + nyuClassesURL;
		document.getElementById("question").value = "Swank Video Request: \n Titles: " + question;
		//submit(document.form);
	}
}

	
	
function validateEmail(email) 
{ 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 