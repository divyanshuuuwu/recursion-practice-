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
// let arr = [1,2,3,4,5,6]

// function reverse(i){
//     if(i>=arr.length/2){
//         return
//     }
//     //swap
//     let temp = arr[i]
//     arr[i] = arr[arr.length-i-1]
//     arr[arr.length-i-1] = temp
//     reverse(i+1)

// }

// reverse(0)
// console.log(arr)

// check if a string is a palindrome
//  

// fibonacci of n using recursion

// function fibo(n){
//     if(n<=1){
//         return n
//     }

//     return fibo(n-1)+fibo(n-2)

// }

// console.log(fibo(4))







//  HASHING
// hashing is technique for storing and finding  data quickly using a hash function

//frequency count
// let arr = [3,3,2,5,6,4,3,2,5,6]

// let hash = new Array(10).fill(0);

// for(let i = 0; i<arr.length; i++){
//     hash[arr[i]]++
// }

// console.log(hash)  

// character hashing

// let str = "banana"

// let hash = new Array(26).fill(0)
// for(let i = 0; i<str.length; i++){
//     let index = str[i].charCodeAt(0) - "a".charCodeAt(0)
//     hash[index]++
// }

// console.log(hash)

// for all characters

// let str = "BanaNa"

// let hash = new Array(256).fill(0)
// for(let i = 0; i<str.length; i++){
//     let index = str[i].charCodeAt(0)
//     hash[index]++
// }

// console.log(hash)

// hash maping
// const arr = [2,1,3,4,2,2,4,1,7]

// const mpp = new Map();

// for(const num of arr){
//     mpp.set(num,(mpp.get(num) || 0)+1)
// }
// console.log(mpp);

//selection sort
// function selectionSort(arr) {

//     for (let i = 0; i < arr.length - 1; i++) {

//         let minIndex = i;

//         for (let j = i+1 ; j < arr.length; j++) {

//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }

//         }

//         let temp = arr[i]
//         arr[i] = arr[minIndex]
//         arr[minIndex] = temp

//     }

//     return arr;
// }

// const arr = [5, 3, 2, 8, 4, 2];

// console.log(selectionSort(arr));

//bubble sort

// function bubble(arr){
//     for(let i=arr.length-1; i>=1; i-- ){
//     let didswap = 0
//     for(let j=0; j<i; j++){
//         if(arr[j]>arr[j+1]){
//          let temp = arr[j]   
//          arr[j] = arr[j+1]
//          arr[j+1] = temp 
//          didswap = 1
//         }
//     }
//     if(didswap === 0){
//         break
//     }
// }
// return arr
// }
// let arr = [52, 54, 28, 87, 66, 12, 38]
// console.log(bubble(arr))

//insesrtion sort

// function insertion(arr){
//     for(let i=1; i<arr.length; i++){
//         let current = arr[i]
//         let j = i-1
//         while(j>=0 && arr[j] > current){
//             arr[j+1] = arr[j]
//             j--
//         }

//         arr[j+1] = current

//     }
//     return arr
    
// }

// let arr = [20, 30, 67, 12, 8, 15]

// console.log(insertion(arr))


//Merge sort
 let arr = [8, 3, 5, 4, 7, 6, 1, 2];


 function mergeSort(arr,low,high){
    if(low>=high) return;

    let mid = Math.floor((high+low)/2)

    mergeSort(arr,low,mid)
    mergeSort(arr,mid+1,high)

    merge(arr,low,mid,high)
    
 }

 function merge(arr,low,mid,high){
    let temp = []

    let left = low
    let right = mid+1

    while(left <= mid && right <= high){
        if(arr[left] <= arr[right]){
            temp.push(arr[left])
            left++
        } else{
            temp.push(arr[right])
            right++
        }
    }

    while(left <= mid){
        temp.push(arr[left])
        left++
    }

    while(right <= high){
        temp.push(arr[right])
        right++
    }

    for(let i= low; i <= high; i++){
        arr[i] = temp[i - low]
    }

 }


mergeSort(arr,0,arr.length-1)
console.log(arr);
