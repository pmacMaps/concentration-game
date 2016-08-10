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
    '/concentration-game/assets/images/img-0.jpg',
    '/concentration-game/assets/images/img-1.jpg',
    '/concentration-game/assets/images/img-2.jpg',
    '/concentration-game/assets/images/img-3.jpg',
    '/concentration-game/assets/images/img-4.jpg',
    '/concentration-game/assets/images/img-5.jpg'
];

// first randomized array of images
var photosArray1 = shuffle(photosCollage);
// second randomized array of images
var photosArray2 = shuffle(photosCollage);

// container for images
var rowContainer = $('#rowContainer');

// add first random array of images to container
for (var i = 0; i < photosArray1.length; i++) {
    rowContainer.append('<div class="img-' + i.toString() + ' col-md-3 card-container"><div class="top"></div><img class="bottom" alt="mckinney family" src="' + photosArray1[i] + '" /></div>');    
}

// add second random array of images to container
for (var i = 0; i < photosArray2.length; i++) {
    rowContainer.append('<div class="img-' + i.toString() + ' col-md-3 card-container"><div class="top"></div><img class="bottom" alt="mckinney family" src="' + photosArray1[i] + '" /></div>');     
}     

var cardContainer = $('.card-container');
var displayedImages = [];
var elementList = [];


// Only want 2 images in the array at a time
// only want to add an image (run a function) if the image display is set to block
// // this prevents the same image being added twice
// with 2 images in array, test if they are the same
   // if so, do some cool animationt to make the disappear
   // if not, set display to none again and reset array

// helper function to empty array
function emptyImgArray() {
    while (displayedImages.length > 0) {
        displayedImages.pop();
    }
}

// helper function to add images to array
function addImgToArray(img) {
    if (displayedImages.length < 2) {
        displayedImages.push(img.attr('src'));
        console.log(displayedImages);
    } 
}

// test image file names and do something if they match
function testImageFileName() {
    if (displayedImages.length === 2) {
        if (displayedImages[0] === displayedImages[1]) {
            //console.log('images match. Do something cool!');
            // add a score or message in footer or header?
            var targetClass = displayedImages[0].split('/');
            var newTest = targetClass.pop();
            var target = newTest.split('.');
            var result = target[0];
            var result2 = '.' + result + ' .col-md-3 .card-container';
            
            console.log(targetClass);
            console.log(newTest);
            console.log(result);
            console.log(result2);
            
            $(result2).css('display', 'none');
            
            //mask.css('background', '#fff');
            //mask.css('display', 'block');
            
            //console.log(targetElements);
            emptyImgArray();
            
            
            
            /*
            if ($('.card-container').hasClass(result)) {
                $(result2).css('display', 'none');
            }
            */
            
            
        } else {
            console.log('images do not match. Sorry!');
            // toggle display of images that are displayed
            // toggle their sibling as well
            emptyImgArray();
            
        }
    } else {
        console.log('Length of image array is ' + displayedImages.length);
    }     
}


cardContainer.click(function() {
    var img = $(this).children('.bottom');
    var mask = $(this).children('.top');
    var _this = $(this);
    
           
    // toggle display for img
    img.toggle();
   
   // if img is displayed, add to array
   // if not, do nothing (log message for testing)    
   if (img.css('display') === 'block') {
       addImgToArray(img);
       testImageFileName()
    } else {
      console.log('img display property is ' + img.css('display'));
    }
    
    // toggle display for mask
    mask.fadeToggle();     
});