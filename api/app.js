
require('dotenv').config()
const MongoClient = require('mongodb').MongoClient
const express = require('express')
const app = express()
const port = 3001
const titleRoute = require('./routes/get')
const cors = require('cors')

//Enabled for local development
app.use(cors())

app.get('/', (req, res) => {
    res.send([{ message: "Home route" }])
})

app.use('/titles', titleRoute)


MongoClient.connect(process.env.DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
    try {
        const database = db.db('dev-challenge')
        const collection = database.collection('Titles')
        app.locals.collection = collection
        app.listen(port, () => { console.log('Server up on port ' + port) })
    }
    catch (err) {
        console.error(err)
    }
})



