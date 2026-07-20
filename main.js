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
// let n = Number(prompt("enter the number"))
// let count = 1;

// function f(){
//     if(n < count){
//         return;
//     }
//     else{
//         console.log(count)
//         count++
//         f()
//     }
// }
// function f(i,n){
//     if(i > n){
//         return
//     }
//      console.log(i)
//      f(i+1 , n)

// }
// f(1,5)

// f()

// print n to 1

// let n = Number(prompt("enter"))
// let count = n

// function f(){
//     if(count < 1){
//         return
//     }
//     else{
//         console.log(count)
//         count--
//         f()
//     }
// }

// f()

// function f(n) {
//     if (n < 1) return;

//     console.log(n);
//     f(n - 1);
// }
// f(5)

// // print form 1 to n using backtracking
// function f(i,n){
//     if(i<1){return}
//     else{
//         f(i-1, n)
//         console.log(i)
//     }
// }
// f(3,3)

// print form n to 1 using backtracking
function f(i , n){
    if(i>n){ return}
    else{
        f(i+1, n)
        console.log(i)
    }
}
f(1, 5)
