'use strict'
const mongoose = require('mongoose')
const os = require('os')
const process = require('process')
const delaySeconds = 5000
//Count connect mongo
const countConnect = () =>
{
    const numConnection = mongoose.connections.length
    console.log(`Numer of connections: ${numConnection}`)
}

//check overload
const checkOverload = () =>
{
    setInterval(() =>
    {
        const numConnection = mongoose.connections.length
        const numCores = os.cpus().length
        const memoryUsage = process.memoryUsage().rss
        //Ex: max number of connections based on number of cores
        const maxConnections = numCores * 5
        console.log(`Memory usage: ${memoryUsage / 1024 / 1024} MB`)
        if (numConnection > maxConnections)
        {
            console.log(`Connection overload detected: ${numConnection}`)
        }

    }, delaySeconds)//Monitor every 5 secs
}

module.exports = {
    countConnect, checkOverload
}