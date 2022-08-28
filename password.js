let password = 'Emily2012!';
let length = password.length;
function containsAnyLetter(str) {
    return /[a-zA-Z]/.test(str);
  }


if (containsAnyLetter(password) && length === 10)
{
    console.log('approved')
} else{
    console.log('does not meet reqiurements')
}


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