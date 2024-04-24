const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    userId: {
        type:String,
        
        required: true,
    },

    text: {
        type:String,
        
        required: true,
    },
    rating: {
        type:Number,
        
        required: true,
    },
    productId: {
        type:String,
        
        required: true,
    },
    createdAt: {
        type:Date,
        
        default: new Date()
    },
    uodatedAt: {
        type:Date,
        
        default: new Date()
    },

})

const reviewsModel = mongoose.model('products', productSchema);
module.exports = reviewsModel;