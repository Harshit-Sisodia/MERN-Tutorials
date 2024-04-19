const { response } = require("express");
const productModel = require("../models/productsModel.js");

const getAllProducts = async (req, res) => {
  const data = await productModel.find();
  // console.log(data);
  // console.log(req.url);
  res.json({
    status: "success",
    results: data.length,
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
    const result = await productModel.create(req.body);
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
  const reqId = req.params.id;
  const data = { ...req.body, reqId };
  const result = await productModel.findOneAndReplace({ _Id: reqId }, data);
};

const updateProduct = async (req, res) => {
  try {
    const reqId = req.params.id;
    const { _id, ...reqBody } = req.body;

    const result = await productModel.findOneAndReplace(
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

    const deleteProduct = await productModel.deleteOne({ _id: reqId });

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
};
