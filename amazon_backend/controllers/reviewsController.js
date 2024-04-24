const { response } = require("express");
const reviewsModel = require("../models/reviewsModel.js");

const getAllProducts = async (req, res) => {
//   const { sort = 'price', page =1, pageSize = 3, fields= 'title,price', ...q}=req.query;
//   const sortStr = sort.split(",").join(" ")
//   const fieldStr = fields.split(",").join(" ")
//   const skip = (page - 1) * pageSize;

  let query = reviewsModel.find()
//   query.sort(sortStr)
//   query.skip(skip)
//   query.limit(pageSize)
  // const data = await productModel.find();
  // console.log(data);
  // console.log(req.url);
  const products = await query;
  const totalResults = await reviewsModel.countDocuments();
  

  res.status(200)
  .json({
    status: "success",
    results: products.length,
    skip,
    limit: pageSize,
    totalResults,
    data: {
      products
    }
  })
}

    
const addProduct = async (req, res) => {
  try {
    // const (_id)
    // const data = await productModel.create(req.body);
    // console.log(data);
    const result = await reviewsModel.create(req.body);
    res.status(201);
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
      message: err.message,
    });
  }
};

const replaceProduct = async (req, res) => {
  try{
  const reqId = req.params.id;
  const data = { ...req.body, reqId };
  const result = await reviewsModel.findOneAndReplace({ _id: reqId }, data)

  res.status(204)
  .json({
    status: "success",
    data: result,
  })}
  catch(err){
    res.status(400).json({
      status: "failed",
      message: err.message
    })
  }
} 

const updateProduct = async (req, res) => {
  try {
    const reqId = req.params.id;
    const { _id, ...reqBody } = req.body;

    const result = await reviewsModel.findOneAndUpdate(
      { _id: reqId },
      reqBody
    );

    res.status(204).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const reqId = req.params.id;

    const deleteProduct = await reviewsModel.deleteOne({ _id: reqId });

    res.status(204).json({
      status: "success",
      response: deleteProduct,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      error: err.message,
    });
  }
};

module.exports = {
  getAllProducts,
  addProduct,deleteProduct,updateProduct,replaceProduct
}
