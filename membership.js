


// creates the function to assign the values that create the form
function formValidation()
{
var userID = document.registration.userid;
var passwrd = document.registration.password;
var name= document.registration.membername;
var address = document.registration.address;
var country = document.registration.country;
var zip = document.registration.zip;
var email = document.registration.email;
var maleSex = document.registration.maleSex;
var femaleSex = document.registration.femaleSex; 

// validates the values and checks for errors
if(userid_validation(userID,5,12))
{
    
if(passid_validation(passwrd,7,12))
{
if(allLetter(name))
{

if(alphanumeric(address))
{ 
if(countryselect(country))
{
if(allnumeric(zip))
{
if(ValidateEmail(email))
{
if(validsex(maleSex,femaleSex))
{
}
} 
}
}
}
}
}
}


return false;

}

// validates userID and returns an error message
function userid_validation(userID,mx,my)
{
var userid_len = userID.value.length;
if (userid_len === 0 || userid_len >= my || userid_len < mx)
{
alert("User Id should not be empty / length be between "+mx+" to "+my);
userID.focus();
return false;

}
return true;
}

// validates password and returns an error message

function passid_validation(passid,mx,my)
{
var passwrd_len = passid.value.length;
if (passwrd_len === 0 ||passwrd_len >= my || passwrd_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
return false;
}
return true;
}

// validates name input and returns an error message

function allLetter(name)
{ 
var letters = /^[A-Za-z]+$/;
if(name.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
name.focus();
return false;
}
}

// validates address input and returns an error message

function alphanumeric(address)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(address.value.match(letters))
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
address.focus();
return false;
}
}

// validates country input and returns an error message

function countryselect(country)
{
if(country.value === "Default")
{
alert('Select your country from the list');
country.focus();
return false;
}
else
{
return true;
}
}
// validates zip input and returns an error message

function allnumeric(zip)
{ 
var numbers = /^[0-9]+$/;
if(zip.value.match(numbers))
{
return true;
}
else
{
alert('ZIP code must have numeric characters only');
zip.focus();
return false;
}
}

// validates email input and returns an error message

function ValidateEmail(email)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
email.focus();
return false;
}
}

// checks sex selection and returns an error message

function validsex(maleSex,femaleSex)
{
x=0;

if(maleSex.checked) 
{
x++;
} if(femaleSex.checked)
{
x++; 
}
if(x===0)
{
alert('Select Male/Female');
maleSex.focus();
return false;

}
else
{
alert('Form Successfully Submitted');
window.location.reload();
return true;
}
}


var membershipCost;


// creates the radio buttons to add the different types of memberships
// the form is part of html, but it's needed i order to obtain the values for the form
<form> action="" name="memberships"
   <input type="RADIO" name="membership" value="basic" checked> Basic
   <input type="RADIO" name="membership" value="premium"> Premium
   <input type="RADIO" name="membership" value="platinum"> Platinum
   <input type="RADIO" name="membership" value="diamond"> Diamond
</form>;

function ValidateForm()
{
    var radioButtons = document.getElementsByName("memberships");
    for(var i = 0; i < radioButtons.length; i++)
    {
        if(radioButtons[i].checked == true)
        {
            if(confirm("You have selected " + radioButtons[i].value + " as your membership. Is that correct?"))
                return true;
            else
                return false;
        }
    }

// creates the statement to check for the type of membership and to asiign the membership cost
if(radioButtons[i].checked == "basic"){

membershipCost = $39.99 per month;


}

else if(radioButtons[i].checked == "premium"){

membershipCost = $59.99 per month;


}

else if(radioButtons[i].checked == "platinum"){

membershipCost = $79.99 per month;


}

else {
    
membershipCost = $99.99 per month;

}
}
