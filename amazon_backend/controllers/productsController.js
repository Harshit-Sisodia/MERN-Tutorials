const productModel = require("../models/productsModel.js");

const getAllProducts = async (req, res) => {
  const data = await productModel.find();
  // console.log(data);
  console.log(req.url);
  res.json({
    status: "success",
    results: 0,
    // message:"All Products",
    data: {
      products: data,
    },
  });
};

const addProduct = async (req, res) => {
  try {
    // const (_id)
    // const data = await productModel.create(req.body);
    // console.log(data);
    const reqId = req.params.id;
    const data ={...req.body,_id: rapid};
    const result = await productModel.findOnaAndreplace({_id: reqId},data);
    res.json({
      status: "success",
    //   results: 1,
      data: {
        product: result,
      },
    }); 
  } catch (err) {
    // console.log(err);
    res.status(500);
    // console.log(err)
    res.json({
      status: "fail",
      message: JSON.stringify(err),
    });
  }
}


const replaceProduct = async(req,res)=>{
    const reqId=req.params.id;
    const data ={...req.body, reqId};
    const result = await productModel.findOnaAndreplace({_Id: reqId},data);

}
module.exports = {
    getAllProducts,
    addProduct,
  
  };
