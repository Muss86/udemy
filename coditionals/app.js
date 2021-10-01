console.log('Its Working!!!');
let radu = prompt('Put a number here: ');
console.log(parseInt(radu) + 10);

if (radu > 2) {
    console.log('Math still works!');
    console.log('Numarul este: ' + radu);
}

let dayOfWeek = prompt('Enter a day of week: ').toLowerCase();
if (dayOfWeek === 'monday') {
    console.log('Ughh I hate Mondays!');
} else if (dayOfWeek === 'saturday') {
    console.log('Yay I love Saturday!');
} else {
    console.log('Meeh');
}


let age = prompt('Ce varsta aveti ca sa va spun ce discount primiti: ');
let ageNum = parseInt(age);
if (ageNum < 5) {
    console.log('Disconunt: FREE');
} else if (ageNum < 10) {
    console.log('Discount: Child $10');
    console.log(ageNum);
} else if (ageNum < 65) {
    console.log('Discount: Adult $20');
} else if (ageNum >= 65) {
    console.log('Discount: Senior $30');
}

let password = prompt('please a new password:');
// password must be 6+ characters
if (password.length >= 6) {
    // console.log('Long enough password');
    // password not include spaces
    if (password.indexOf(' ') === -1) {
    console.log('Valid Password');
    } else {
    console.log('Password cannot contain spaces!');
    }

} else {
    console.log('Password too short! Must be 6+ characters');
}

// if (password.length >= 6 && password.indexOf(' ') == -1) {
//     console.log('Valid Password')
// } else {
//     console.log('Incorrect password')
// }