let password = 'Emily2012!';
let length = password.length;
function containsAnyLetter(str) {
    return /[a-zA-Z]/.test(str);
  }
  function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}
function checkUppercase(str){
    for (var i=0; i<str.length; i++){
      if (str.charAt(i) == str.charAt(i).toUpperCase() && str.charAt(i).match(/[a-z]/i)){
        return true;
      }
    }
    return false;
};

if (containsAnyLetter(password) && length === 10 && containsSpecialChars(password) && checkUppercase(password))
{
    console.log('approved')
} else{
    console.log('does not meet reqiurements')
}


// also going to see if i can make a function to check for uppercase letters
// it will be a function that will loop through the string until it finds a uppercase letter or else it will return it as false
// function checkUppercase(str){
//     for (var i=0; i<str.length; i++){
//       if (str.charAt(i) == str.charAt(i).toUpperCase() && str.charAt(i).match(/[a-z]/i)){
//         return true;
//       }
//     }
//     return false;
// };



// i realize these arent in order so sorry for that..lol

// going to try this test string to see if i can use it to check for special characters
// function containsSpecialChars(str) {
//     const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
//     return specialChars.test(str);


// this was my next step in figuring out my length and conditional statement would work
// if (length === 10){
//     console.log('approved')
// } else if(length != 10)
// {
//     console.log('does not meet requirements')
// }





// this was my first attempt at figuring it out so im leaving this in the comments dont laugh at me plz
// if (password === letter && password === length){
//     console.log ('approved!')
// } 
// else if (password != letter && password != length){
//     console.log ('does not meet requirements')
// }