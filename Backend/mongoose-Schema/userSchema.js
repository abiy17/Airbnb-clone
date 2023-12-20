const mongoose = require(`mongoose`)
const bycrypt = require(`bcrypt`)
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true},
    email: { type:String, required:true,unique:true },
    password: { type:String,required:true },
    phoneNumber: { type:Number,require:true },
    isVerified: { type:Boolean,require:true },
    IdFile: [],
    Wishlists: [],
    Profile: [],
})

UserSchema.statics.signup = async function(username,email,password,phoneNumber){
    const emailExist = await this.findOne({ email })
    if(emailExist){
        throw Error(`email already in use`)
    }

    const salt = await bycrypt.genSalt(10)
    const HashedPassword = await bycrypt.hash(password,salt)

    const user = await this.create({ username,email,password: HashedPassword,phoneNumber })
    return user;
}

UserSchema.statics.login = async function( email,password ){
    const user = await this.findOne({ email })
    if(!user){
        throw Error(`incorrect email`)
    }
    const checkPassword = await bycrypt.compare(password,user.password)
    if(!checkPassword){
        throw Error(`incorrect Password`)
    }
    return user;
}

const UserModel = mongoose.model(`users`,UserSchema)
module.exports = UserModel;
