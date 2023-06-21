window.addEventListener('DOMContentLoaded', function() {
    // Get the carousel element
    var carousel = document.getElementById('carousel');
  
    // Get the array of carousel images
    var carouselImages = Array.from(document.getElementsByClassName('carousel-image'));
  
    // Get the carousel counter element
    var carouselCounter = document.querySelector('.carousel-counter');
  
    var currentImageIndex = 0;
    var totalImages = carouselImages.length;
  
    // Function to show the current image with sliding motion
    function showCurrentImage() {
      // Calculate the width of the carousel container
      var carouselWidth = carousel.offsetWidth;
  
      // Position the images to the left or right based on the current image index
      carouselImages.forEach(function(image, index) {
        if (index === currentImageIndex) {
          image.style.left = '0';
        } else if (index < currentImageIndex) {
          image.style.left = '-' + carouselWidth + 'px';
        } else {
          image.style.left = carouselWidth + 'px';
        }
      });
  
      // Remove transition for the previous image
      carouselImages.forEach(function(image) {
        image.style.transition = '';
      });
  
      // Set transition for the current image
      carouselImages[currentImageIndex].style.transition = 'left 0.3s ease';
  
      // Update the counter
      updateCounter();
    }
  
    // Function to update the counter
    function updateCounter() {
      carouselCounter.innerHTML = '';
  
      for (var i = 0; i < totalImages; i++) {
        var dot = document.createElement('span');
        dot.classList.add('carousel-dot');
  
        if (i === currentImageIndex) {
          dot.classList.add('active');
        }
  
        carouselCounter.appendChild(dot);
      }
    }
  
    // Function to move to the next image
    function moveToNextImage() {
      currentImageIndex++;
  
      if (currentImageIndex >= totalImages) {
        currentImageIndex = 0;
      }
  
      showCurrentImage();
    }
  
    // Show the initial image
    showCurrentImage();
  
    // Set interval to move to the next image every 3 seconds
    setInterval(moveToNextImage, 3000);
  });
  