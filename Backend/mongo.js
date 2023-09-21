const mongoose = require(`mongoose`)
const listingsModel = require(`./mongoose-Schema/listingsAndReviews`)
const UserModel = require(`./mongoose-Schema/userSchema`)
const jwt = require(`jsonwebtoken`)
mongoose.connect('mongodb+srv://chuna:kdb17aby@cluster0.17tjqjc.mongodb.net/');

const createToken =(_id)=>{
    return jwt.sign({ _id },`airbnb`,{ expiresIn: `3d` })
}

let user
const createUser = async (req,res,next) =>{
    const { username,email,password,phoneNumber } = req.body;
    try{
        user = await UserModel.signup( username,email,password,phoneNumber )
        const Token = createToken(user._id)
        res.status(200).json({user,Token})
    }
    catch(err){
        res.status(400).json({ mssge: "error signup" })
    }
}

const loggingIN = async ( req,res,next )=>{
    const { email,password } = req.body;
    try{
        user = await UserModel.login( email,password )
        const Token = createToken(user._id)
        res.status(200).json({user,Token})
    }  
    catch(err){
        res.status(400).json({ mssge: err.message })
    }
}
let listing 
const getListing = async ( req,res,next) =>{
    try{
        listing = await listingsModel.find();
        res.status(200).json(listing)
    }
    catch(err){
        res.status(400).json({ mssg:err.message })
    }
}

const Searching = async ( req,res,next ) =>{
    const { country } = req.body
    try{
       let ResultSearching = await listingsModel.find({ "address.country": country }) 
       res.json(ResultSearching)
    }
    catch(err){
        res.json({ mssge: err })
    }
}

exports.createUser = createUser;
exports.loggingIN = loggingIN;
exports.getListing = getListing;
exports.Searching = Searching;