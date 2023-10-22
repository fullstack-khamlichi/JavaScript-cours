//const fs = require('fs')

//fs.readFile('./index.html', 'utf-8' , (err, data) => {
require('fs').readFile('./index.html', 'utf-8' , (err, data) => {
    if(err !== null){
        console.log(`Error: ${err}`)
        return
    }
    console.log(data)
})