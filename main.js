// Base value for index
var i = 0;

// Image List
var images = [];

//Duration
var time = 3000;

//Sources
images[0] = 'zema/z0.jpeg';
images[1] = 'zema/z1.jpeg';
images[2] = 'zema/z2.jpeg';
images[3] = 'zema/z3.jpeg';

/* Change the image source over time */
function changeImg() {
  //Select the main image
  document.slide.src = images[i];

  /* Default filters for all thumbnails: grayscale and blur */
  const [img0] = document.getElementsByClassName('gambar0');
  img0.style.filter = 'grayscale(100%) blur(1px)';

  const [img1] = document.getElementsByClassName('gambar1');
  img1.style.filter = 'grayscale(100%) blur(1px)';

  const [img2] = document.getElementsByClassName('gambar2');
  img2.style.filter = 'grayscale(100%) blur(1px)';

  const [img3] = document.getElementsByClassName('gambar3');
  img3.style.filter = 'grayscale(100%) blur(1px)';

  /** Only display the active thumbnail in color */

  const [innerDiv] = document.getElementsByClassName('gambar' + i);
  innerDiv.style.filter = 'brightness(100%)';
  // Index
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  // Time
  setTimeout('changeImg()', time);
}

window.onload = changeImg;
