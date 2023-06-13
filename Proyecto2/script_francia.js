function addZoomEffectWithOverlay(imageId, url) {
  // Get the image element
  var image = document.getElementById(imageId);

  // Create a container element to hold the image and overlay
  var container = document.createElement('div');
  container.style.position = 'relative';
  container.style.display = 'inline-block'; // Ensure the container wraps around the image

  // Create a new image element for the original image
  var originalImage = document.createElement('img');
  originalImage.src = image.src; // Set the source to the original image's source
  originalImage.style.width = '100%'; // Adjust the size of the original image
  originalImage.style.height = '100%';

  // Create the overlay element
  var overlay = document.createElement('div');
  overlay.style.position = 'absolute';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
  overlay.style.opacity = '0';
  overlay.style.transition = 'opacity 0.3s ease';
  overlay.style.zIndex = '1'; // Ensure the overlay appears on top of the image

  // Create the text element
  var text = document.createElement('p');
  text.textContent = 'Haz click para entradas';
  text.style.position = 'absolute';
  text.style.top = '50%';
  text.style.left = '50%';
  text.style.transform = 'translate(-50%, -50%)';
  text.style.fontFamily = 'Arial, sans-serif';
  text.style.fontSize = '24px';
  text.style.color = 'black';

  // Append the original image, overlay, and text elements to the container
  container.appendChild(originalImage);
  container.appendChild(overlay);
  overlay.appendChild(text);

  // Add event listeners
  container.addEventListener('mouseenter', function() {
    originalImage.style.transform = 'scale(1.2)';
    overlay.style.transform = 'scale(1.2)';
    overlay.style.opacity = '1';
  });

  container.addEventListener('mouseleave', function() {
    originalImage.style.transform = 'scale(1)';
    overlay.style.transform = 'scale(1)';
    overlay.style.opacity = '0';
  });

  container.addEventListener('click', function() {
    window.open(url, '_blank');
  });

  // Replace the original image element with the container
  image.parentNode.replaceChild(container, image);
}

// Call the function for each image, passing the respective image ID and URL
addZoomEffectWithOverlay('torre', 'https://www.toureiffel.paris/es');
addZoomEffectWithOverlay('arco', 'https://www.paris-arc-de-triomphe.fr/es');
addZoomEffectWithOverlay('louvre', 'https://www.louvre.fr/es/visita/horario-y-tarifas');
// Add more images as needed with their respective URLs

