'use strict';

// randomize order of array
// see https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

// initial array of images
var photosCollage = [
    '/concentration-game/assets/images/img-1.jpg',
    '/concentration-game/assets/images/img-2.jpg',
    '/concentration-game/assets/images/img-3.jpg',
    '/concentration-game/assets/images/img-4.jpg',
    '/concentration-game/assets/images/img-5.jpg',
    '/concentration-game/assets/images/img-6.jpg'
];

// first randomized array of images
var photosArray1 = shuffle(photosCollage);
// second randomized array of images
var photosArray2 = shuffle(photosCollage);

// container for images
var rowContainer = $('#rowContainer');

// add first random array of images to container
for (var i = 0; i < photosArray1.length; i++) {
    rowContainer.append('<div class="col-md-3 card-container"><div class="top"></div><img class="bottom" alt="mckinney family" src="' + photosArray1[i] + '" /></div>');    
}

// add second random array of images to container
for (var i = 0; i < photosArray2.length; i++) {
    rowContainer.append('<div class="col-md-3 card-container"><div class="top"></div><img class="bottom" alt="mckinney family" src="' + photosArray1[i] + '" /></div>');     
}     

var cardContainer = $('.card-container');
var displayedImages = [];

// Only want 2 images in the array at a time
// only want to add an image (run a function) if the image display is set to block
// // this prevents the same image being added twice
// with 2 images in array, test if they are the same
   // if so, do some cool animationt to make the disappear
   // if not, set display to none again and reset array
function testImageFileName(img) {
    if (displayedImages.length < 2) {
        displayedImages.push(img.attr('src'));
        console.log(displayedImages);
    } else {
      while (displayedImages.length > 0) {
            displayedImages.pop();
      }
    
      displayedImages.push(img.attr('src'));
      console.log(displayedImages);
    }
}

cardContainer.click(function() {
   //$(this).children('.top').fadeToggle();
   //$(this).children('.bottom').fadeToggle();
    $(this).children().fadeToggle();
    var img = $(this).children('.bottom');
    testImageFileName(img);
});



