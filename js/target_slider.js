const images = document.querySelectorAll("#target-slider img");
  let currentImageIndex = 0;

  function showImage(index) {
    images.forEach((image, i) => {
      if (i === index) {
        image.style.opacity = 1;
      } else {
        image.style.opacity = 0;
      }
    });
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
  }

  showImage(currentImageIndex);
  setInterval(nextImage, 5000); // 5000 milliseconds = 5 seconds