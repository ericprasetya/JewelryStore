var form = document.forms['register']
var errorName = document.getElementById('error-name')
var errorCity = document.getElementById('error-city')
var errorEmail = document.getElementById('error-email')
var errorPassword = document.getElementById('error-password')
var errorConfirmPassword = document.getElementById('error-confirm-password')
var errorAddress = document.getElementById('error-address')
var errorAgree = document.getElementById('error-agree')

function validateEmail(email){
  var at = email.indexOf("@");
  var space = email.indexOf(" ");
  var dot = email.lastIndexOf(".");
  return at > 0 && //@ tidak diawal
    dot > at + 1 && //setelah @ tidak langsung .
    space === -1; //tidak ada spasi
}

function isAlpha(character){
  return character >= 'a' && character <= 'z' || character >= 'A' && character <= 'Z'
}

function isNumberic(character) { 
  return character >= '0' && character <='9'
}

function isAlphaNumeric(character){
  return isAlpha(character)==true || isNumberic(character)==true
}

function validatePassword(password){
  var flagAlpha = false;
  var flagNumber = false;

  for (let index = 0; index < password.length; index++) {
    const element = password[index];
    if(isAlphaNumeric(element) == false){
      console.log(element)
      return false
    }
    if(isAlpha(element)){
      flagAlpha = true
    }
    if(isNumberic(element)){
      flagNumber = true
    }
  }
  return flagAlpha == true && flagNumber == true
}

//panjangn nama minimal 6
function validateName(name){
  var length = name.length
  if(length < 6) return false
  return true
}

//confirm password harus sama dengan password
function validateConfirmPassword(password,confirmPassword){
  if (password == confirmPassword) return true
  return false
}

function validateForm(ev){
  var isValid = true
  var name = form['name'].value
  var mail = form['email'].value
  var password = form['password'].value
  var confirmPassword = form['confirm-password'].value

  if(name == ""){
    errorName.innerText = "*Requiered Field";
    isValid = false;
  }else{
    errorName.innerText = "";
  }

  if(mail == ""){
    errorEmail.innerText = "*Requiered Field"
    isValid = false
  }else{
    errorEmail.innerText = ""
  }

  if(password == ""){
    errorPassword.innerText = "*Requiered Field"
    isValid = false
  }else{
    errorPassword.innerText = ""
  }

  if(confirmPassword == ""){
    errorConfirmPassword.innerText = "*Requiered Field"
    isValid = false
  }else{
    errorConfirmPassword.innerText = ""
  }

  if(form['address'].value == ""){
    errorAddress.innerText = "*Requiered Field"
    isValid = false
  }else{
    errorAddress.innerText = ""
  }

  if(form['agree'].checked == false){
    errorAgree.innerText = "*Must be checked"
    isValid = false
  }else{
    errorAgree.innerText = ""
  }

  if(validateName(name) == false){
    errorName.innerText += "  *Name must be more than 6 characters"
    isValid = false
  }

  if(validateEmail(mail) == false){
    errorEmail.innerText += "  *Invalid Email"
    isValid = false
  }

  if(validatePassword(password) == false){
    errorPassword.innerText += "  *Password must contain both alphabet and number, and contain only alphanumeric character"
    isValid = false
  }

  if(validateConfirmPassword(password, confirmPassword) == false){
    errorConfirmPassword.innerText += " *confirm password must be same with password"
    isValid = false
  }

  if(isValid == false){
    ev.preventDefault()
  }else if(isValid == true){
    var confirmed = confirm('Confirm your credentials?')
    if(confirmed == true){
      alert('Thank you for joining our circle')
    }
  }
}

