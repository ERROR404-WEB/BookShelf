const express = require('express')
const cors = require('cors')

const mongoose = require('mongoose')




const dblink = "mongodb://0.0.0.0:27017/bookshelf"

const app = express()

app.use(express.json())
app.use(cors())

const connectToMongo = async() => {
    mongoose.connect(dblink, await console.log('Connected to Mongodb'))
}

connectToMongo();



//routes 
app.use('/api/',require('./routes/books'));


app.listen(5000, () => {
  console.log("Server is running on port 5000");
});