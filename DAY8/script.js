// // console.log('Hello!');

// const fs = require("fs");
// const http = require("http");
// const url = require('url')

// const data = fs.readFileSync("./data.json","utf-8");
// const dataObj = JSON.parse(data);

// // console.log(dataObj)

// const cardTemplate=`
// <div class = 'product-card'>
// <h3>$TITLE$</h3>
// <img src="$img_src$" alt ='product-image' />
// <a href = "$product_link$">More Info</a>
// </div>

// `;

// let  result = [];

// for (let i = 0; i < dataObj.length; i++) {
//     let temp = cardTemplate;
//     temp = temp.replace('$TITLE$',dataObj[i].title);
//     temp = temp.replace('$img_src$',dataObj[i].images[0]);
//     temp = temp.replace('$product_link$',`/product?id=${i}`);

//     result.push(temp);

// }

// result = result.join(' ');
// console.log(result);

// const server= http.createServer((req,res)=>{
//     const route = req.url;

//     console.log('\n',route,'\n');
//     const  = url.parse()
//     const {pathname, query} = url.parse(req.url,true);
//     // const a
//     console.log('\n',query,'\n');
//     // const

//     if(pathname=='/home'){
//         res.end(result);
//     }

//     else if(pathname=='/product')
//     {
//         // res.end('product page');
//         const id = query.id;
//         const productData =  path
//         console.log()
//     }
//     else{
//         res.end("404 not found!");
//     }

//   ////////////////////////////////////////

//     // const path = url.parse.req.url;
//     // const pathname = path.pathname;
//     // const q = path.query;

//     // if(pathname == '/home');
//     // {
//     //     res.end(result;

//     // }
//     // else if(pathname=='/about')
//     // {
//     //     res.end('I am Harshit');
//     // }
//     // else if(pathname=='/product')
//     // {
//     //     const id=q.id;
//     //     const searchItem=dataObj[id];
//     //     res.end(searchItem.title);
//     // }
//     // else
//     // {
//     //     res.end('oops title not found');
//     // }
// });

// server.listen(1400);

//     // ()=>{
// // console.log("started");
// // });

const http = require("http");
const fs = require("fs");
const url = require("node:url");

const data = fs.readFileSync("data.json", "utf-8");
// console.log(data);

const dataObj = JSON.parse(data);
const inputElement=`
<form action='/product'>
<imput type= "text" name="productName">
<button type="submit">Search</button>
</form>`
const cardTemplate = `
    <div class="product-card">
    <h3>$TITLE</h3>
    <img src="img_src" alt="product-images">
    <p>$PRICE</p>
    <p>$Brand</p>

    <a href="/product_links">Read more</a>
    </div>
    `;

let result = [];
for (let i = 0; i < dataObj.length; i++) {
  let temp = cardTemplate;
  temp = temp.replace("$TITLE", dataObj[i].title);
  temp = temp.replace("img_src", dataObj[i].images[0]);
  temp = temp.replace("$Brand", dataObj[i].brand);
  temp = temp.replace("$PRICE", dataObj[i].price);
//   temp = temp.replace("$discountPercentage", dataObj[i].discountPercentage);
  temp = temp.replace("product_links", `product?id=${i}`);
  result.push(temp);
}

result = result.join("");
// result = inputElement+result;
// result = result.join('');

// console.log(result);
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  // const route = req.url;
  // const path = url.parse(req.url);
  // const pathname =path.pathname;

  const { pathname, query } = url.parse(req.url, true);
  // console.log(route, "\n\n");
  // console.log(path);
  console.log(query);

  if (pathname == "/home") {
    res.end(inputElement+result);
  } else if (pathname == "/product") {
    
    const id = query.id;
    // console.log(dataObj[id]);
    
    const items = dataObj[id];

    // res.end(productid);
    res.end(`
            <div>
            <h1>${items.id}</h1>
            <h2>${items.price}</h2>
            <img src="${items.thumbnail}" alt="asdf">
            <h2>${items.description}</h2>
            <a href="/home">Back</a>
            </div>
            `);
  } else {
    res.end("404 page not found");
  }

  // res.end(result);
});
server.listen(1164, () => {
  console.log("server started.....");
});
