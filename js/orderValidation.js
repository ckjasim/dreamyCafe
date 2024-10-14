




document.querySelector('.order-form').addEventListener('submit', function (e) {
  e.preventDefault();

  let isValid = true;
  const errorMessages = [];

  document.getElementById('errorMessages').innerHTML = '';

  // Order type validation (Delivery or Pickup)
  const orderType = document.querySelector('input[name="order-type"]:checked');
  if (!orderType) {
    isValid = false;
    errorMessages.push('Please select Delivery or Pickup.');
  }

  // Delivery address validation (only if Delivery is selected)
  if (orderType && orderType.value === 'delivery') {
    const deliveryAddress = document.getElementById('delivery-address').value.trim();
    if (deliveryAddress === ''|| deliveryAddress.length < 5) {
      isValid = false;
      errorMessages.push('Please enter a delivery address.');
    }
  }

  // Billing address validation
  const billingAddress = document.getElementById('billing-address').value.trim();
  if (billingAddress === '' || billingAddress.length < 5) {
    isValid = false;
    errorMessages.push('Please enter a billing address.');
  }

  // Contact number validation
  const contactNumber = document.getElementById('contact-number').value.trim();
  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(contactNumber)) {
    isValid = false;
    errorMessages.push('Please enter a valid 10-digit contact number.');
  }

  // Email receipt validation
  const emailReceipt = document.getElementById('email-receipt').value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailReceipt)) {
    isValid = false;
    errorMessages.push('Please enter a valid email for receipt.');
  }

  // Payment method validation (Pay on Pickup or Pay Online)
  const paymentMethod = document.querySelector('input[name="payment-method"]:checked');
  if (!paymentMethod) {
    isValid = false;
    errorMessages.push('Please select a payment method.');
  }

  // Credit card validation (only if Pay Online is selected)
  if (paymentMethod && paymentMethod.value === 'online') {
    const creditCard = document.getElementById('credit-card').value.trim();
    const cardPattern = /^[0-9]{16}$/; 
    if (!cardPattern.test(creditCard)) {
      isValid = false;
      errorMessages.push('Please enter a valid 16-digit credit card number.');
    }
  }

  if (isValid) {
    alert('Order placed successfully!');
    this.submit();
  } else {
    document.getElementById('errorMessages').innerHTML = `<ul>${errorMessages.map(msg => `<li>${msg}</li>`).join('')}</ul>`;
  }
});
