// Create an empty cart array to store the added packages
let cart = [];

// Function to handle adding a package to the cart
function addToCart(packageName) {
  // Add the package to the cart array
  cart.push(packageName);

  // Update the cart display
  displayCart();
}

// Function to display the cart items
function displayCart() {
  // Get the packages-container element
  const packagesContainer = document.getElementById('packages-container');

  // Clear the previous content of the packages-container
  packagesContainer.innerHTML = '';

  // Generate the HTML markup for the cart items
  cart.forEach((packageName) => {
    // Create a new package element
    const packageElement = document.createElement('div');
    packageElement.classList.add('col');
    packageElement.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${packageName}</h5>
        </div>
      </div>
    `;

    // Append the package element to the packages-container
    packagesContainer.appendChild(packageElement);
  });
}

// Event listeners for "Comprar paquete" buttons
const parisBtn = document.getElementById('paris-btn');
parisBtn.addEventListener('click', () => {
  addToCart('Paquete Paris');
});

const florenceBtn = document.getElementById('florence-btn');
florenceBtn.addEventListener('click', () => {
  addToCart('Paquete Florencia');
});

const barcelonaBtn = document.getElementById('barcelona-btn');
barcelonaBtn.addEventListener('click', () => {
  addToCart('Paquete Barcelona');
});

const copenhagenBtn = document.getElementById('copenhagen-btn');
copenhagenBtn.addEventListener('click', () => {
  addToCart('Paquete Copenhague');
});
