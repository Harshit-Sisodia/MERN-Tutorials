// const fs = required('fs');
// console.log("start");

// const data= fs.readFileSync('')
// fs.writeFileSync('./logs.txt',"10th April 2024: Day 7");

// console.log("start")
// const fspromises= require('./myReadMe.txt',{encoding:'utf8'});
// pr.then((res)=>{
//     console.log(res);

// })

// console.log("End")

//call back in file system
// const fs = red('fs');

// fs.readFile('./myReadMe.txt',{encoding:"utf8"},(err,data)=>{
//     console.log(data);
//     control
    
    
// });

// https://loaclhost:1400
// const http = required('http');

// const app = http.creteServer((req,res)=>{
//     console.log(" Request Recieved!");
// });

// server.listen(1400),()=>{
//     console.log('...........server started...........')
// }



const fs = require('fs');
const data= fs.readFileSync('data.json', {encoding:'utf-8'})


const http = require('http');
const { CLIENT_RENEG_LIMIT } = require('tls');

const htmlTemplate = '<!DOCTYPE html><html><head></head><body>Product_Cards</body></html>'


const cardTemplate=`<div class ='_product_cards_'><h4>_TITLE_</h4><p>_INFO_</p></div>`

const card1=cardTemplate.replace('_TITLE_','xiomi_11_pro');

const page =htmlTemplate.replace('Product_Cards',card1)

console.log("\n : card,")

// const server = http.createServer((req,res)=>{
//     // console.log('Request recieved');

//     console.log(req.url);
//     res.writeHead(200,{
//         'content-type': 'text/html',
//     })
//     res.end(page);
// });

// server.listen(1500,()=>{
//     console.log('...........server started...........')
// });
let products = ""

JSON.parse(data).forEach(product => {
    const card = cardTemplate
        .replace('_TITLE_', product.title)
        .replace('_INFO_', product.description)
    products += card
})

renderUI(products)

function renderUI(products) {
    const page = htmlTemplate.replace('Product_Cards', products)
    const server = http.createServer((req, res) => {
        res.setHeader('Content-Type', 'text/html')
        res.write(page)
        res.end()
    })
    server.listen(1500, () => console.log("<---- Server Started ---->"))

}