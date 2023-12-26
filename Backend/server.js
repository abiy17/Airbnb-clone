const express = require(`express`)
const app = express();
const cors = require(`cors`)
const mongo = require(`./mongo`)
const bodyParser = require(`body-parser`)
const upload = require(`./utils/multer`)
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(cors());

app.get(`/listing`,mongo.getListing)

app.get(`/users`,mongo.getUsers)

app.post(`/searching`,mongo.Searching)

app.post(`/createProfile/:id`,upload.single(`images`),mongo.createProfile)

app.post(`/verifyUser/:id`,upload.single(`GovermentIdFile`),mongo.VerifyUser)

app.put(`/updateProfile/:id`,upload.single(`imageUpdate`),mongo.updateProfile)

app.put(`/EditPersonalInfo/:id`,mongo.EditPersonalInfo)

app.post(`/host/:id`,upload.single(`Houseimage`),mongo.host)

app.post(`/signup`,mongo.createUser)

app.post(`/AddWishlists/:id`,mongo.AddWishlists)

app.post(`/login`,mongo.loggingIN)

app.post('/create-checkout-session', mongo.CreateSession);

app.listen( process.env.PORT || 5000 ,()=>{
    console.log(`Server is running on port 5000`)
})
