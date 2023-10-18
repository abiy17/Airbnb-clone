const express = require(`express`)
const app = express();
const cors = require(`cors`)
const mongo = require(`./mongo`)
const bodyParser = require(`body-parser`)
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(cors());

app.get(`/listing`,mongo.getListing)

app.get(`/users`,mongo.getUsers)

app.post(`/searching`,mongo.Searching)

app.post(`/signup`,mongo.createUser)

app.post(`/AddWishlists/:id`,mongo.AddWishlists)

app.post(`/login`,mongo.loggingIN)

app.listen( process.env.PORT || 5000 ,()=>{
    console.log(`Server is running on port 5000`)
})
