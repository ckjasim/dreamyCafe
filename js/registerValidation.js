document.querySelector('.registration-form').addEventListener('submit', function (e) {
  e.preventDefault(); 

  let isValid = true;
  const errorMessages = [];

  document.getElementById('errorMessages').innerHTML = '';

  // Username validation
  const username = document.getElementById('username').value.trim();
  if (username === '' || username.length < 4) {
    isValid = false;
    errorMessages.push('Username must be at least 4 characters long.');
  }

  // Password validation
  const password = document.getElementById('password').value.trim();
  if (password === '' || password.length < 7) {
    isValid = false;
    errorMessages.push('Password must be at least 7 characters long and cannot be empty.');
  }

  // Gender validation
  const gender = document.querySelector('input[name="gender"]:checked');
  if (!gender) {
    isValid = false;
    errorMessages.push('Please select a gender.');
  }

  // Email validation
  const email = document.getElementById('email').value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    isValid = false;
    errorMessages.push('Please enter a valid email address.');
  }

  // Favourite Coffee validation
  const favouriteCoffee = document.getElementById('favourite-coffee').value;
  if (favouriteCoffee === 'Choose your coffee') {
    isValid = false;
    errorMessages.push('Please select your favourite coffee.');
  }

  // Terms and conditions validation
  const terms = document.querySelector('input[type="checkbox"]');
  if (!terms.checked) {
    isValid = false;
    errorMessages.push('You must accept the terms and conditions.');
  }

  // If the form is valid, submit it
  if (isValid) {
    alert('Form submitted successfully!');
    this.submit();
  } else {
    document.getElementById('errorMessages').innerHTML = `<ul>${errorMessages.map(msg => `<li>${msg}</li>`).join('')}</ul>`;
  }
});

