console.log('working');
var bool = true;
var name= 'jack';
var numb =1;

// if statement
if (!numb) {
  // do something
  console.log('the condition is true');
}

// single line statement

if (!numb) console.log('the condition is true');
// if else statement
if (!bool) {
  // do something if true
  console.log('condition is truthy');
} else {
    // do something is false
  console.log('condition is falsey');

}


// if else if statement




// or ||-only one statement needs to be true for code block to run
if (numb === '1' || bool=== false) {
  // do something is first condirition is truthy
  console.log('condition 1');

} else if(numb === 1 && bool === false) {
  // do something is the condition is a different value
  console.log('condition 2');

} else {
  // do something is no condition is met
  console.log('no condition met');

}

// switch statement
switch (name) {
  case 'tim':
  console.log('name is tim');
  break;
  case 'im':
  console.log('name is im');
  break;
  case 'm':
  console.log('name is m');
  break;
  case 'jack':
  console.log('name is jack');
  break;
  default:
  console.log('no match');
}
