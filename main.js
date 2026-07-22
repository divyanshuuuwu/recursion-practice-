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
// function f(i , n){
//     if(i>n){ return}
//     else{
//         f(i+1, n)
//         console.log(i)
//     }
// }
// f(1, 5)


// sum of n numbers using parameterized

// function f(i,sum){
//     if(i<1){
//         console.log(sum)
//         return}
//     else{
//         f(i-1, sum+i)
//     }
// }

// f(3,0)

// sum of first n numbers functional
// function sum(n){
//     if(n === 0){
//         return 0
//     }
//     else{
//         return n + sum(n-1)
//     }
// }
// console(sum(3))

// factorial of n parametrised
// function f (i,ans){
//     if(i<1){
//         return ans
//     }
//     return f(i-1,ans*i)

// }

// let xyz = f(3,1)
// console.log(xyz)

// factorial of n functional
// function f(n){
//     if(n<1){
//         return 1
//     }
// return n * f(n-1)
        
// }

// console.log(f(3))

// reverse an array using recursion two pointer
// let arr = [1,2,3,4,5,6]

// function reverse(l,r){
//     if(l>=r){return}
//     // swap
//     let temp = arr[l]
//     arr[l] = arr[r]
//     arr[r] = temp
//     reverse(l+1,r-1)
// }

// reverse(0, arr.length - 1);
// console.log(arr)

// reverse an array using recursion one pointer
let arr = [1,2,3,4,5,6]

function reverse(i){
    if(i>=arr.length/2){
        return
    }
    //swap
    let temp = arr[i]
    arr[i] = arr[arr.length-i-1]
    arr[arr.length-i-1] = temp
    reverse(i+1)

}

reverse(0)
console.log(arr)




