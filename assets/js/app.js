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
    rowContainer.append('<div class="col-md-3 img-container"><img alt="mckinney family" src="' + photosArray1[i] + '" /></div>');    
}

// add second random array of images to container
for (var i = 0; i < photosArray2.length; i++) {
    rowContainer.append('<div class="col-md-3 img-container"><img alt="mckinney family" src="' + photosArray2[i] + '" /></div>');    
}     

// need images to be flipped to other side
// // need to create element for this side
// need to create click event to perform transform
// need to test for images turned over have save src attribute
// if so, add message or something and remove them (fancy hide)




