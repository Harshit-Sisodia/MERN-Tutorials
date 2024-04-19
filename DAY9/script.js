// const http = require("http");
// const fs = require("fs");
// const url = require("node:url");

// const data = fs.readFileSync("../DAY8/data.json", "utf-8");
// // console.log(data);

// const dataObj = JSON.parse(data);
// const inputElement=`
// <form action='/product'>
// <input type= "text" name="productName">     
// <button type="submit">Search</button>
// </form>`
// const cardTemplate = `
//     <div class="product-card">
//     <h3>$TITLE</h3>
//     <img src="img_src" alt="product-images">
//     <p>$PRICE</p>
//     <p>$Brand</p>

//     <a href="/product_links">Read more</a>
//     </div>
//     `;

// let result = [];
// for (let i = 0; i < dataObj.length; i++) {
//   let temp = cardTemplate;
//   temp = temp.replace("$TITLE", dataObj[i].title);
//   temp = temp.replace("img_src", dataObj[i].images[0]);
//   temp = temp.replace("$Brand", dataObj[i].brand);
//   temp = temp.replace("$PRICE", dataObj[i].price);
// //   temp = temp.replace("$discountPercentage", dataObj[i].discountPercentage);
//   temp = temp.replace("product_links", `product?id=${i}`);
//   result.push(temp);
// }

// result = result.join("");
// // result = inputElement+result;
// // result = result.join('');

// // console.log(result);
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   // const route = req.url;
//   // const path = url.parse(req.url);
//   // const pathname =path.pathname;

//   const { pathname, query } = url.parse(req.url, true);
//   // console.log(route, "\n\n");
//   // console.log(path);
//   console.log(query);

//   if (pathname == "/home") {
//     res.end(inputElement+result);
//   } else if (pathname == "/product") {
    
//     const id = query.id;
//     // console.log(dataObj[id]);
    
//     const items = dataObj[id];

//     // res.end(productid);
//     res.end(`
//             <div>
//             <h1>${items.id}</h1>
//             <h2>${items.price}</h2>
//             <img src="${items.thumbnail}" alt="asdf">
//             <h2>${items.description}</h2>
//             <a href="/home">Back</a>
//             </div>
//             `);
//   } else {
//     res.end("404 page not found");
//   }

  // res.end(result);
// });
// server.listen(1164, () => {
//   console.log("server started.....");
// });



// const express = require('express');
// const fs = require('fs');
// const fsPromises = require("fs/promises");
// const app = express()


// ---------------------   Through callback, read file synce

// app.get('/api/products', (req, res) => {
//  const data = fs.readFileSync('data.json', 'utf-8');

//     // console.log(data);
//     const arr = JSON.parse(data).products;
//     res.json(
//         {
//             status: 'success',
//             results: arr.length,
//             data: {
//                 products: arr,

//             }
//         }
//     );
// });

//--------------------------Through async await



// app.get('/api/products', async (req, res) => {
//     const data = await fsPromises.readFile('data.json', 'utf-8')
//     // console.log(data);
//     const arr = JSON.parse(data);
//     // res.json(
//     //     {
//     //         status: 'success',
//     //         results: arr.length,
//     //         data: {
//     //             products: arr,

//     //         }
//     //     }
//     // );

//     if(len==0)
//     {
//         data.id = 1;
//         console.log(arr);
//         arr.push(data);
//         console.log(arr);
//     }
//     else{
        
//     }
//     res.send('Work in progress');
// });

// app.use(express.json());



// app.post('/api/products', (req, res) => {

//     // console.log(Object.keys(res));
//     console.log(req.body);
//     // const data = req.body;
//     // data.id=121;
//     // console.log(data);
//     res.send("Working progress")
    

// });


// app.listen(1400);



const express = require('express');
// const fs = require("fs");
const fsPromises = require("fs/promises");

const app = express();

app.use(express.json());

app.get('/api/products', async(req, res) => {
    // const data = fs.readFileSync('./data.json', "utf8");
    const data = await fsPromises.readFile('./data.json', "utf8");
    const arr = JSON.parse(data).products;
    res.json(
        {
            status: 'success',
            results: arr.length,
            data: {
                products: arr
            }
        });

});

app.post('/api/products', async (req, res)=>{
    // console.log(Object.keys(req));
    const data = req.body;
    data.id = 121;
    console.log(data);

    const db = await fsPromises.readFile("./data.json", 'utf-8');
    const arr = JSON.parse(db);
    const len = arr.length;
    if(len==0){
        const newProduct = data;
        newProduct.id = 1;
        arr.push(newProduct);
        console.log(arr);
        fsPromises.writeFile("./data.json", JSON.stringify(arr));
    }
    else{
        const newProduct = data;
        newProduct.id = len +1;
        arr.push(newProduct);
        fsPromises.writeFile("./data.json", JSON.stringify(arr));
        res.json({

        
            status: 'success',
            results : 1,
            data: {
                 product: newProduct,
             }}     
        )

    }
    res.send('Work in progress');
});


app.listen(1400);