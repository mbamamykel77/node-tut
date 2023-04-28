const { log } = require('console')
const path = require('path')
console.log(path.sep)

// This provides the file path to a dir
const filePath = path.join('/content', 'sunfolder', 'test.txt')
console.log(filePath)

// This provides the last path of a file
const base = path.basename(filePath)
console.log(base)

// This provides the absolute path of a dir
const absolute = path.resolve(__dirname, 'content', 'sunfolder', 'test.txt')
console.log(absolute);