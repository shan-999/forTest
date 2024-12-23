const express = require('express')
const app = express()
const connectDB = require('./connect/connect')
const userRoutes = require('./router/user')
const path = require('path')

app.set('views', path.join(__dirname, 'view'))
app.set('view engine', 'ejs')

app.use('/', userRoutes)

connectDB()
app.listen(2000 ,()=> {
    console.log('runnig prot 2000');
})