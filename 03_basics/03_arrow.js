const user = {
    username: "Jils",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
// user.welcomeMessage()
// user.username="Bob"
// user.welcomeMessage()

// function one(){
//     let username="john"
//     console.log(this.username);//undefied output
// }
//one()

const one=()=>{
    let username="john"
    console.log(this.username);
}
//one()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
//or
const addTwo=(num1,num2)=>(num1+num2)
console.log(addTwo(5,6));

//const myArray = [2, 5, 3, 7, 8]

//myArray.forEach()