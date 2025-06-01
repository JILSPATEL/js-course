function sayMyName(){
    console.log("J");
    console.log("I");
    console.log("L");
    console.log("S");
}

//sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }
function addTwoNumbers(number1,number2){
    let result=number1+number2;
    return result
}
const result=addTwoNumbers(4,5)
//console.log(result);

function loginUserMessage(username){
    if (!username){
        return "please enter a username"
    }
    else{
        return `${username} logged in`
    }
}
// console.log(loginUserMessage("jils"));
// console.log(loginUserMessage());

function calculateCartPrice(...num1){ //rest operator
    return num1
}
//console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "jils",
    prices: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`);
    
}
//handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray=[200,400,100,600]

function returnSecVal(getVal){
    return getVal[1]
}
console.log(returnSecVal(myNewArray));
