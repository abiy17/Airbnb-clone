const mongoose = require(`mongoose`)
const listingsModel = require(`./mongoose-Schema/listingsAndReviews`)
const UserModel = require(`./mongoose-Schema/userSchema`)
const jwt = require(`jsonwebtoken`)
const cloudinary = require(`./utils/cloudinary`)
const stripe = require("stripe")("sk_test_51O6ARmDwZfua1AHPDSJUDRZZC1wZAqHYm39d7dwhkjxZFbW6kKQkWypuHn4kvugQ8IA6Hwk7yR2laexuglYmjRTy009pptrfhy")
mongoose.connect('mongodb+srv://chuna:kdb17aby@cluster0.17tjqjc.mongodb.net/?retryWrites=true&w=majority').then((res)=>{
    console.log("succesfully connected!")
});
// mongoose.connect('mongodb+srv://chuna:kdb17aby@cluster0.17tjqjc.mongodb.net/');
const express = require("express")
const app = express()
app.use(express.static(`public`))
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

const updateProfile = async (req,res) =>{
    const { id } = req.params
    const imageUpdate = await cloudinary.v2.uploader.upload(req.file.path)
    const { school,placeOfLiving,Obsession,skil,language,song,BiographyTitle,funFact } = req.body
    try {
        const user = await UserModel.findByIdAndUpdate(
            id,
            {
                $set: {
                    [`Profile.${0}`]: {
                        image: imageUpdate.secure_url,
                        school,
                        placeOfLiving,
                        Obsession,
                        skil,
                        language,
                        song,
                        BiographyTitle,
                        funFact,
                    },
                },
            },
            { new: true }
        );

        if (!user) {
            return res.status(400).send("Error: User not found");
        }

        return res.status(200).json({ mssge: "Profile Updated Successfully!" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
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
        listing = await listingsModel.find()
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

const CreateSession = async ( req,res,next )=>{
    try {
        const { checkInDate, checkOutDate, numberOfGuests, price, houseName,images,userId } = req.body;

        // Create a Stripe Checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
            {
                price_data: {
                currency: 'usd',
                product_data: {
                    name: houseName,
                    description: `Guests: ${numberOfGuests}`,
                    images: images
                },
                unit_amount: price * 100, // Stripe deals with amounts in cents
                },
                quantity: 1,
            },
            ],
            mode: 'payment',
            success_url: 'https://yourwebsite.com/success', // Redirect to this URL after successful payment
            cancel_url: 'http://localhost:5173', // Redirect to this URL if the user cancels
            metadata: {
                userId,
                checkInDate,
                checkOutDate,
                numberOfGuests,
                houseName
              },
        });

        res.json({ sessionUrl: session.url });
      }catch (error) {
        console.error(error);
        res.status(400).send('Payment failed');
      }
}

const VerifyUser =async (req,res)=>{
    const { id } = req.params
    try{
        let uploadFile = await cloudinary.v2.uploader.upload(req.file.path)
        let user = await UserModel.findById(id).exec()
        if(user){
            user.IdFile.push(uploadFile.secure_url)
            user.isVerified = true
            await user.save();
            res.status(200).json(user)
        }
        else{
            res.send(`user Not found!`)
        }
        
    }catch(err){
        res.status(400).json({ mssge: "error" })
    }
}

const host = async (req,res)=>{
    const { hostId } = req.params
    let imageUrl = await cloudinary.v2.uploader.upload(req.file.path)
    const { listOfAmenties,name,description,street,$numberDecimalGuest,bedrooms,host_thumbnail_url,host_name,host_response_time,host_about,numberDecimalPrice } = req.body
    const newHouseData = {
        name,
        images: {
            picture_url: imageUrl.secure_url
        },
        description,
        address:{
            street
        },
        guests_included:{
            $numberDecimal: $numberDecimalGuest
        },
        bedrooms,
        reviews: [
    
        ],
        host: {
            host_thumbnail_url,
            host_name,
            host_response_time,
            host_about,
            hostId
        },
        amenities: listOfAmenties,
        price: {
            $numberDecimal: numberDecimalPrice
        }
    }
    try{
        listing = await listingsModel.create(newHouseData)
        await listing.save()
        res.send("sucess!")
    }
    catch(err){
        res.status(400).json({ msge: err })
    }
}

let userInfo
const EditPersonalInfo = async (req,res)=>{
    const { id } = req.params
    const { username,email,phoneNumber,placeOfLiving,EmergencyContact } = req.body
    try{
        user = await UserModel.findByIdAndUpdate(id,req.body, { new:true }).then(user =>{
            if(!user){
                res.json({ mssge: "Not found!" })
            }
        })
        userInfo = await UserModel.findById(id)
    }catch(err){
        res.json({
            msge: err
        })
    }
}

exports.createUser = createUser;
exports.createProfile = createProfile;
exports.loggingIN = loggingIN;
exports.getListing = getListing;
exports.Searching = Searching;
exports.AddWishlists = AddWishlists;
exports.getUsers = getUsers;
exports.CreateSession = CreateSession;
exports.updateProfile = updateProfile;
exports.VerifyUser = VerifyUser
exports.host = host
exports.EditPersonalInfo = EditPersonalInfo