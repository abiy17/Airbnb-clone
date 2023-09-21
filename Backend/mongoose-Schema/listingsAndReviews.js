const mongoose = require(`mongoose`)

const listingsAndReviews = new mongoose.Schema({
    name: { type:String,required:true },
    summary: { type:String,required:true },
    space: { type:String,required:true },
    address: {
        country: { type:String }
    }
    
})

const listingsModel = mongoose.model(`listings And Reviews`,listingsAndReviews)
module.exports = listingsModel;