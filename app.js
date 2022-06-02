'use strict'
const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'
const app = express()
const bodyparser = require('body-parser')
const path = require('path')

//View engine setup
app.use(bodyparser.urlencoded({extended:false}))
app.set('view engine', 'ejs')
app.set("views", "view")

app.use(express.static(__dirname +'/node_modules/bootstrap/dist/css'))
app.use(express.static(__dirname +'/node_modules/bootstrap/dist/js'))
app.use(express.static(__dirname +'/css'))
app.use(express.static(__dirname +'/images'))

//render file menggunakan ejs
app.get('/', (req, res) => {
    res.render('index')
})

//render file menggunkan html
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname,'index.html'))
// })

app.listen(PORT, (req, res) => {
    console.log(`Server running on http://${HOST}:${PORT} `)
})