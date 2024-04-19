// More javascript functions

// const arr = [10,22,34];

// const ans = arr.map((a)=>{
//     console.log(a);
//     return a*2;
// });

// // const ans2 = arr.map(a=Math.pow(a,2));
// const arr2 = [10,11,22,32,34,76];

// const ans3 = arr.map(a=>parseInt(a));

// console.log(ans);
// console.log(ans2);


// const ans= arr.push(99);

// console.log(ans);
// console.log()

// const arr =[10,22,34];

// const ans=arr.filter((a)=>{
//     if(a>20)return true;
//     else return false;
// })

// console.log(arr);
// console.log(ans);

// const arr =[
//     'Delhi','Mumbai','chennai','kolkata','pune','India','russia','USA'
// ]

// const ans = arr.filter((s)=>{
//     if(s.includes('i')){
//         return true;            
//     }
//     else{
//         false;
//     }
// })
// console.log(ans);


// const arr1 =['delhi','mumbai','india','chennai']

// const  ans = arr.filter((a)=>{
//      a.toLowerCase().include('india')
// })

const arr = ['ab','cd','xy','z'];
const ans = arr.reduce((total,curr,c,d)=>{
    console.log(total,curr);
    return total + curr;
});

console.log(ans);