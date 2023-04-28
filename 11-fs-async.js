// Asynchronous javascript

const {readFile, writeFile} = require('fs')
console.log('start');

// Best way to remember this is like the addeventlistener function
// Always provide the encoding so nodes know how to decode (utf8)
readFile('./content/first.txt', 'utf8', (err, result)=>{
    // Return err
    if (err){
        console.log(err)
        return
    }
    // // else return what you want to happen
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if (err){
            console.log(err)
            return
        }
        const second = result;
        writeFile('./content/result-async.txt', 
        `here is the result : ${first}, ${second}`, 
        (err, result)=>{
            if (err){
                console.log(err)
                return err
            }
            console.log('done with this task')

        })
    })
})
console.log('starting next task');

// The Asynchronous javascript performs multiple task together, anyone can come first.
// This allows the program handle different task at once regardless of how the codes are written and allow node to serve different users.