'use strict'

const mongoose = require('mongoose')
const connectString = 'mongodb://localhost:27017/ShopDev'
mongoose.connect(connectString).then(_ => console.log('Connected to MongoDB sucessfully')).catch(_ => console.log('Error connect!'))
//dev 
if (1 === 1)
{
    mongoose.set('debug', true)
    mongoose.set('debug', { color: true })
}

module.exports = mongoose