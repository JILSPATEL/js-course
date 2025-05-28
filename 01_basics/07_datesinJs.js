//Dates

let myDates=new Date()
// console.log(myDates.toString());
// console.log(myDates.toDateString());
// console.log(myDates.toISOString());
// console.log(myDates.toJSON());

// let myCreatedDate=new Date(2025,0,25)
// let myCreatedDate=new Date(2025,0,25,5,3)
// let myCreatedDate=new Date("2025-02-01")
//let myCreatedDate=new Date("01-25-2025")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default',{
    weekday:"long"
    
})
