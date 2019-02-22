//begin the "magic"//

'use strict';

//Questions//

var pets = prompt('How many pets does Adam have?');
console.log('Number of pets = ', pets);

var stars = prompt('How many stars are in the sky?');
console.log('Number of the stars in the sky = ', stars);

var salad = prompt('What is Adam\'s favorite Salad Dressing?');
console.log('Adam\'s favorite Salad Dressing = ', salad);

var cell= prompt('What sham cellphone does Adam have?');
console.log('Adam\'s sham cellphone = ', cell);

var talent = prompt('What is Adam\'s best talent?');
console.log('Adam\'s best talent = ', talent);

if (pets === '2' || stars.toLowerCase() === 'a lot' || salad === 'blue cheese' || cell === 'Apple 6s' || talent === '30 foot 3 pointers') {
  alert('You nailed it.');

  //If not all correct//

} else {
  alert('Good guesses but no.');
}
