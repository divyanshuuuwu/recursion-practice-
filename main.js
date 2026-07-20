// function recursion(){
//     console.log(20)
//     // recursion()
// }

// recursion()

// run n times 
// let count = 4;

// function run(){
//     if(count === 4){
//         console.log(`function completed ${count}`)
//         return
//     }
//     else{
//         count++
//         run()
//     }
// }

// run()

// print name n times
// let n = Number(prompt("enter your number"))
// let count = 0;

// function nTimes(){
//     if(count === n){
//         return;
//     }
//     else{
//         console.log("name")
//         count++
//         nTimes()
//     }
// }

// nTimes()

// print linearly from 1 to n
let n = Number(prompt("enter the number"))
let count = 1;

function f(){
    if(n < count){
        return;
    }
    else{
        console.log(count)
        count++
        f()
    }
}

f()