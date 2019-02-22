//begin the "magic"//

'use strict';

//Questions//

var pets = prompt('Does Adam have pets?');
console.log('Number of pets = ', pets);

var stars = prompt('Does Adam like staring at stars?');
console.log('Number of the stars in the sky = ', stars);

var salad = prompt('Does Adam like Blue Cheese Salad Dressing?');
console.log('Adam\'s favorite Salad Dressing = ', salad);

var cell= prompt('Does Adam hate his sham iPhone 6?');
console.log('Adam\'s sham cellphone = ', cell);

var talent = prompt('Was Adam ever on a Talent Show?');
console.log('Adam\'s best talent = ', talent);

if (pets.toLowerCase() === 'y' || stars.toLowerCase() === 'y' || salad.toLowerCase() === 'y' || cell.toLowerCase() === 'n' || talent.toLowerCase() === 'n') {
  alert('You nailed it.');

  //If not all correct//

} else {
  alert('Good guesses but no.');
}
