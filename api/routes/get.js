
const express = require('express')
const router = express.Router() 

//Get all Titles 
router.get('/', (req, res) => {
    const collection = req.app.locals.collection;
    collection.find().toArray(function (err, data) {
        res.send(data)
        console.log(data)
    })
})


//Get titles that match regex
router.get('/:queryString', (req, res) => {
    const collection = req.app.locals.collection;
    let qs = req.params.queryString
    let search = new RegExp(`${qs}`, 'i')
    console.log(search)
    collection.find({ "TitleName": search }).toArray(function (err, data) {
        res.send(data)
        console.log(data)
    })
})

module.exports = router