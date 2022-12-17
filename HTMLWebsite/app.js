const express = require("express")
const fs = require("fs")
const path = require("path")

const app = express()
const port = 300

app.use('/static', express.static('static'))
app.use(express.urlencoded())

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))


app.get('/', (req, res)=>{
    const params = {message: "Hello welcome."}
    res.status(200).render('home.pug')
})
app.get('/contact', (req, res)=>{
    const params = {message: "Hello welcome."}
    res.status(200).render('contact.pug')
})


app.listen(port, ()=>{
    console.log(`click on this: http://localhost:${port}/`)
})