function validateForm() {
  // Clear previous errors
  document.getElementById('error').innerHTML = '';

  // Fetch all the input values
  var firstname = document.forms["myForm"]["firstname"].value;
  var lastname = document.forms["myForm"]["lastname"].value;
  var email = document.forms["myForm"]["email"].value;
  var password = document.forms["myForm"]["password"].value;

  // Check for empty fields
  if (firstname === "" || lastname === "" || email === "" || password === "") {
    document.getElementById('error').innerHTML = '<img src="./images/icon-error.svg" width="20" alt="">All fields must be filled out.';
    return false;
  }

  // Check if the email contains '@'
  if (!email.includes('@')) {
    document.getElementById('error').innerHTML = 'Email must include an "@" symbol.';
    return false;
  }

  // If everything is fine, allow form to be submitted
  return true;
}
