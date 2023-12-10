



// function getDateAge(start,end) {
//     const date1 = new Date(start);
//     const date2 = new Date(end);

//     const oneDay = 1000 * 60 * 60 * 24;

//     const diffTime = date2.getTime() - date1.getTime();

//     const diffDays = Math.round(diffTime / oneDay);

//     return diffDays;
// }



// console.log(getDateAge("12/1/2023", "12/10/2023"))


// function getLast(year, month) {
//     return new Date(year, month, 0).getDate();
// }

// const date = new Date();
// const currentYear = date.getFullYear();
// const currentMonth = date.getMonth() + 1;

// const daysCurrentMonth = getLast(
//     currentYear,
//     currentMonth,
// );

// const daysss = getLast(2023,9);
// console.log(daysss)

// function getSecondsToday() {
//     let now = new Date();

//     // create an object using the current day/month/year
//     let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

//     let diff = now - today; // ms difference
//     return Math.round(diff / 1000); // make seconds
//   }

//   console.log( getSecondsToday() );


// function getSecondTomorrow() {
// let now = new Date();

// let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)

//     let diff = tomorrow - now; // ms difference
//     return Math.round(diff / 1000); // make seconds
// }

// console.log(getSecondTomorrow())


// function formatDate(date) {
//     let diff = new Date() - date; // the difference in milliseconds

//     if (diff < 1000) { // less than 1 second
//       return 'right now';
//     }

//     let sec = Math.floor(diff / 1000); // convert diff to seconds

//     if (sec < 60) {
//       return sec + ' sec. ago';
//     }

//     let min = Math.floor(diff / 60000); // convert diff to minutes
//     if (min < 60) {
//       return min + ' min. ago';
//     }

//     // format the date
//     // add leading zeroes to single-digit day/month/hours/minutes
//     let d = date;
//     d = [
//       '0' + d.getDate(),
//       '0' + (d.getMonth() + 1),
//       '' + d.getFullYear(),
//       '0' + d.getHours(),
//       '0' + d.getMinutes()
//     ].map(component => component.slice(-2)); // take last 2 digits of every component

//     // join the components into date
//     return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
//   }

//   alert( formatDate(new Date(new Date - 86400 * 1000)) );



// let user = {
//     name: "Valisily Huiev",
//     age: 35
// }
// const obj = JSON.parse(JSON.stringify(user));

// console.log(obj)

// let room = {
//     number: 23
// };

// let meetup = {
//     title: "Совещание",
//     occupiedBy: [{name: "Ivanov"}, {name: "Petrov"}],
//     place: room
// }

// room.occupiedBy = meetup;
// meetup.self = meetup;

// console.log( JSON.stringify(meetup, function replacer(key, value) {
//     return (key != "" && value == meetup) ? undefined : value;
// }));


// function fac(num) {
//     if (num < 0)
//     return -1;
// else if(num == 0)
// return 1
// else {
//     return (num * fac(num - 1));
// }
// }

// console.log(fac(5))


// function fib(num) {
//     let num1 = 1;
//     let num2 = 1;
//     for (let i = 3; i <= num; i++)
//     {
//         let c = num1 + num2;
//         num1 = num2;
//         num2 = c;
//     }
//     return num2
// }
// console.log(fib(10))


// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// }

// function print(list) {
//  if (list.next) {
//     print(list.next);
//  }
//  console.log(list.value);
// }

// console.log(print(list))

// function makeCounter () {
//     let count = 0;

//     return function() {
//         return count++;
//     };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// console.log(counter());
// console.log(counter())


// console.log(counter2())
// console.log(counter2())


// let arr = [1,2,3,4,5,6,7];
 

// function inBetween(a,b) {
//     return function(x) {
//         return x >= a && x <= b;
//     };
// }

// function inArray(arr) {
//     return function(x) {
//         return arr.includes(x);
//     };
// }

// console.log(arr.filter(inArray([1,2,7])))


сортировать по полю 1707 стр

