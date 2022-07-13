const express = require('express')

const connect=require("./config/db")
const newsController=require("./controllers/news.controllers") 



const app = express()
app.use(express.json())
 


app.use("/news",newsController)



app.listen(7007, async function () {
    try {
        await connect()
        console.log('listening on port 7007')
    } catch (error) {
        console.log('error:', error)
    }
})