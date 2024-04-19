// console.log('start')

// setTimeout(()=>{console.log('Timeout...')},5)

// console.log('End')


// setTimeout(()=>{console.log('Timeout 1...')},4000)
// console.log('start')
// setTimeout(()=>{console.log('Timeout 2...')},20000)
// console.log('intermediate')


// console.log('End')


// making promise start..


// createOrder()
// makePayment()

// function createOrder(x,fn){
// console.log(x);
// // makePayment();
// setTimeout(()=>fn('lik123'),1000);
// setTimeout(()=>fn('lik123'),1000);
// }

// function makePayment(orderID){
//     console.log(orderID);
// }

// createOrder('soap',makePayment);

//  Note: inversion of control (read)


//make a promise
// const pr = new Promise((resolve,reject)=>{
//     // logic
//     if(true)
//     {
//         setTimeout(()=>{
//             resolve("done-123");
//         },10000);
//     }else{
//         reject();
//     }
// });

// console.log(pr);

// pr.then((res)=>{
//     console.log(res);
// })


const pr = new Promise((resolve,reject)=>{
    // logic
    if(true)
    {
        setTimeout(()=>{
            reject("some items are out of stock");
        },0);
    }else{
        reject();
    }
});

setTimeout(()=>{console.log('First Timeout...'),0});
// console.log(pr);

pr.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);   
})

