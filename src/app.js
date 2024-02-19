//Compression package giúp tối ưu giảm dung lượng của response
const compression = require('compression')
const express = require('express')
//Helmet package dùng để bảo vệ thông tin tránh bị hack
const { default: helmet } = require('helmet')
//Morgan package dùng để hiển thị thông tin khi có request vào
const morgan = require('morgan')
const app = express()


//init middlewares
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())
//init db
require('./dbs/init.mongodb')
//init routes
app.get('/', (req, res, next) =>
{
    const strCompress = "Hello Test"
    return res.status(200).json({
        message: 'Success',
        // metadata: strCompress.repeat(50000)
    })
})
//handle errors

module.exports = app