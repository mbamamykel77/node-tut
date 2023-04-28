// Synchronous javascript

const {readFileSync, writeFileSync} = require('fs')
console.log('start')

const first = readFileSync('./content/first.txt', 'utf-8')
// console.log(first);

const second = readFileSync('./content/second.txt', 'utf-8')
// console.log(second)

// This creates a new file using a specified file path, 
// the first arguement is for file dir and the second argument inputs a text
writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`)

console.log(`i'm done with the task`)
console.log('starting the next one');

// The Synchronous javascript performs one task after another line by line, which is not advisable to use.
// This would means node will not be able to serve other users.