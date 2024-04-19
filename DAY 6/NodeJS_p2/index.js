// const figlet = require('figlet');
// figlet('Hello !',(err,data)=>{
//     console.log(data);
// });


//old method
// fetch('https://api.github.com/users/deepak3440')
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch.log()

// asinc await
// async function getApi(){
//     const pr = await fetch('https://api.github.com/users/deepak3440');
//     // console.log(pr);
//     const data = await pr.json();
//     console.log(data);
// }
// getApi();

// console.groupCollapsed('start')
// async function getApi(){
//     console.log('api caliing...');
//     const pr = await fetch('https://api.github.com/users/deepak3440');
//     console.log('making json');
//     console.log(pr);
//     const data = await pr.json();
//     console.log('::fetched data');

// }

// getApi();
// console.log('end');

console.log('start');

async function callAPI()
{
    const pr = await new Promise((res,rej)=>{
        console.log('promise 1...');
        setTimeout(()=>{
            console.log('timeout 1...');
            res('done')
        },10000);
    })
    console.log('promise 1 completed');
}
callAPI();


