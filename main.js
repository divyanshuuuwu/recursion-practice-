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
let n = Number(prompt("enter your number"))
let count = 0;

function nTimes(){
    if(count === n){
        return;
    }
    else{
        console.log("name")
        count++
        nTimes()
    }
}

nTimes()