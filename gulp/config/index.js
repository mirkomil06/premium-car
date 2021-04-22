// fs - node jsga tegishli bolib filesystem
const fs = require('fs')
const path = './gulp/tasks'
const arrayOfPaths = fs.readdirSync(path)
.map(fileName => fileName = `${path}/${fileName}`)

module.exports = arrayOfPaths