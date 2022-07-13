const express=require('express')
const router =express.Router()
const apicache=require("apicache")
let cache=apicache.middleware

const News=require("../models/news.models")

router.post('', async (req, res) => {
    try {
        const newss = await News.create(req.body)
        return res.send(newss)
    } catch (error) {
        return res.send(error)
    }
})

router.get('/',cache("3 minutes") ,async (req, res) => {
    const page=req.query.page || 1
    const size=req.query.size || 5
    try {
        const newss = await News.find().skip((page-1)*size).limit(size).lean().exec()
        res.send(newss)
    } catch (error) {
        res.send(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const newss = await News.find( {
            "$or":[
                {"title":{$regex:req.params.id}},
                {"author":{$regex:req.params.id}}
            ]
        }).lean().exec()

        res.send(newss)
    } catch (error) {
        res.send(error)
    }
})



 
module.exports=router