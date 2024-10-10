// creating a date instance of date class
let myDate = new Date();
// console.log(myDate.toString());
//Sun Oct 06 2024 19:07:36 GMT+0530 (India Standard Time)

// console.log(myDate.toLocaleString());
//Sun Oct 06 2024 19:08:31 GMT+0530 (India Standard Time)
//10/6/2024, 7:08:31 PM

let createdDate = new Date("2023, 10, 22"); // we can define a custom date in dd/mm/yy , mm/dd/yy and yy/mm/dd format
console.log(createdDate.toString());

console.log(myDate.getDay()); // returns day in numeric format as mondat => 1
console.log(myDate.getMonth()); // reutrn numeric vlaue of month starting from 0 as january
console.log(myDate.getDate()); // returns date

console.log(createdDate.getDate());

// console.log(typeof(myDate));
//object type


