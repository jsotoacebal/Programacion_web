function validateForm(event) {
  event.preventDefault(); // Prevent the form from submitting by default

  // Get form inputs
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var destinationInput = document.getElementById('destination');
  var messageInput = document.getElementById('message');

  // Get form values
  var name = nameInput.value.trim();
  var email = emailInput.value.trim();
  var destination = destinationInput.value.trim();
  var message = messageInput.value.trim();

  // Validate name
  if (name === '') {
    alert('Ingrese su nombre.');
    nameInput.focus();
    return false;
  }

  // Validate email
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
  if (email === '') {
    alert('Ingrese su mail.');
    emailInput.focus();
    return false;
  } else if (!emailRegex.test(email)) {
    alert('Ingrese mail valido.');
    emailInput.focus();
    return false;
  }

  // Validate destination
  if (destination === '') {
    alert('Ingrese su destino');
    destinationInput.focus();
    return false;
  }

  // Validate message
  if (message === '') {
    alert('Ingrese su mensaje.');
    messageInput.focus();
    return false;
  }

  // If all validations pass, you can submit the form or perform additional actions
  alert('Formulario enviado con exito!');
  // Uncomment the line below if you want to submit the form
  // document.getElementById('contactForm').submit();
}
