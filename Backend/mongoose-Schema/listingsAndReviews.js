const mongoose = require(`mongoose`)

const listingsAndReviews = new mongoose.Schema({
    name: { type:String,required:true },
    images:{ 
        picture_url: { type:String,required:true }
    },
    description: { type:String,required:true },
    address:{
        street: { type:String,required:true }
    },
    guests_included:{
        $numberDecimal:{ type:Number,required:true }
    },
    bedrooms: { type:Number,required:true },
    reviews: [

    ],
    host: {
        host_thumbnail_url: { type:String },
        host_name: { type:String},
        host_response_time: { type:String },
        host_about: { type:String },
        hostId: { type:Number }
    },
    amenities: [

    ],
    price: {
        $numberDecimal: { type:Number,required:true }
    }

    
})

const listingsModel = mongoose.model(`listings And Reviews`,listingsAndReviews)
module.exports = listingsModel;