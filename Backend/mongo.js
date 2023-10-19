const mongoose = require(`mongoose`)
const listingsModel = require(`./mongoose-Schema/listingsAndReviews`)
const UserModel = require(`./mongoose-Schema/userSchema`)
const jwt = require(`jsonwebtoken`)
const cloudinary = require(`./utils/cloudinary`)
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

const createProfile = async (req,res,next) =>{
    const { id } = req.params
    const { school,placeOfLiving,Obsession,skil,language,song,BiographyTitle,funFact } = req.body
    try{
        let result = await cloudinary.v2.uploader.upload(req.file.path)
        user = await UserModel.findById(id)
        user.Profile.push({ image:result.secure_url ,school,placeOfLiving,Obsession,skil,language,song,BiographyTitle,funFact})
        user.save();
        res.status(200).json({ msge: "profile created sucessfully!" })
    }
    catch(err){
        res.status(400).json({ msge: err })
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

const AddWishlists = async (req,res,next)=>{
    const { id } = req.params
    const { name,picture_url,property_type,room_type } = req.body
    try{
        user = await UserModel.findById(id)
        if( user.Wishlists.find(item => item.name === name)){
            res.status(400).json({
                msge: "already added to wishlists"
            })
        }
        else{
            user.Wishlists.push({ name,picture_url,property_type,room_type })
            await user.save()
            res.status(200).json({ user })
        }
    }
    catch(err){
        res.status(400).json({ mssge: "failed to add wishlists" })
    } 
}

const getUsers = async (req,res,next)=>{
    try{
        user = await UserModel.find();
        res.status(200).json({ user })
    }catch(err){
        res.status(400).json({ msge: "couldn't get user data" })
    }
}

exports.createUser = createUser;
exports.createProfile = createProfile;
exports.loggingIN = loggingIN;
exports.getListing = getListing;
exports.Searching = Searching;
exports.AddWishlists = AddWishlists;
exports.getUsers = getUsers;