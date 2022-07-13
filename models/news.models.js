const mongoose=require('mongoose')

const newsSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    author:{ type: String, required: true },
    content:{ type: String, required: true },
    url:{ type: String, required: true },
    image:{ type: String, required: true }
})
const News = mongoose.model('news', newsSchema)

module.exports=News

