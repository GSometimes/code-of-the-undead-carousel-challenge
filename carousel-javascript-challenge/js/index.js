// Selecting all image elements from the document and storing them in the 'images' constant
const images = document.querySelectorAll('.images img');

// Selecting all button elements inside the .btm-sliders class and storing them in the 'sliders' constant
const sliders = document.querySelectorAll('.bottom-slider-buttons button');

// Selecting the button inside the .slide.left class and storing it in the 'leftSlideButton' constant
const leftSlideButton = document.querySelector('.slide.left button');

// Selecting the button inside the .slide.right class and storing it in the 'rightSlideButton' constant
const rightSlideButton = document.querySelector('.slide.right button');

// Initializing a variable 'index' with a value of 1
let index = 1;

// Calling the showImage function with index 1 as the argument
showImage(index);

// Function definition for 'showImage' which takes an argument 'e'
function showImage(e) {
  // If the passed argument 'e' is greater than the number of images, reset index to 1
  if (e > images.length) {
    index = 1;
  }

  // If the passed argument 'e' is less than 1, set index to the number of images (i.e., go to the last image)
  if (e < 1) {
    index = images.length;
  }

  // Loop through each image in the images list
  images.forEach((img, i) => {
    // If the current index equals the index of the image being viewed, set its opacity to 1 (visible), else set it to 0 (invisible)
    if (i === index - 1) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  });

  // Loop through each slider button in the sliders list
  sliders.forEach((slider, i) => {
    // If the current index equals the index of the button being clicked, set its background to white, else set it to a light white color
    if (i === index - 1) {
      slider.classList.add('active');
    } else {
      slider.classList.remove('active');
    }
  });
}

// Add event listeners to each slider button to call the showImage function with the appropriate index when clicked
sliders.forEach((slider, i) => {
  slider.addEventListener('click', () => {
    showImage((index = i + 1));
  });
});

// Add an event listener to the left slide button to decrease the index by 1 when clicked, and call the showImage function with the new index
leftSlideButton.addEventListener('click', () => {
  showImage((index += -1));
});

// Add an event listener to the right slide button to increase the index by 1 when clicked, and call the showImage function with the new index
rightSlideButton.addEventListener('click', () => {
  showImage((index += 1));
});
