console.log('connnected')

const person = {
    firstName: ' Viggo',
    lastName: 'Mortensen',
    fullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(person)

function rolldie(numSide = 6){
    return Math.floor(math.random() * numSides) + 1
}

const prices = [9.99, 1.50, 19.99, 49.99, 30.50]

// getting the total of all prices
const total = prices.reduce((total, price) => {
return total + price
})

console.log(total)

// const dayOfWeek = 'Monday'; {
//     if(dayOfWeek === 'Monday');
//     console.log('Uggh I hate Mondays')
// }
//  else if (dayOfWeek === 'Saturday'); {
//     console.log('I love Saturdays');
// };

const dayOfWeek = prompt('Enter a day')
if( dayOfWeek === 'Monday'){
    console.log('Uggh I hate Monadays')
} else if (dayOfWeek === 'Tuesday'){
    console.log('I love Tuesday')
} else if (dayOfWeek === 'Wednesday'){
    console.log('I love Wednesday')
}else if (dayOfWeek === 'Thursdays'){
    console.log('I love Firdays')
}else (dayOfWeek === 'saturday');{
    console.log('I love saturday')
}
// 0-5 free 
// 5-10 $10
// 10-65 $20
// 65+ free
 const age = 4;
 if(age >= 0 && age < 5 || age >= 65){
     console.log('free')
 }else if(age >= 5 && age < 10){
     console.log('you pay $10')
 }else if( age >= 10 && age < 65){
     console.log('you pay $20')
 }else {
     console.log('Invalid age');
 };


//  ARRAYS

let days = ['Monaday','Tuesday','Wednesday'];
