const fs  = require('fs')
const csv = require('csv-parser')
const path = require('path');

async function readCSV(fileName) {
    return new Promise((resolve, reject)=>{
        const result = [];
        const filePath = path.resolve(fileName);

        fs.createReadStream(filePath)
            .pipe(csv({
                mapHeaders: ({header}) => header.replace(/^\uFEFF/, '')
            }))
            .on('data',(data)=>{
                result.push(data)
            })
            .on('end',()=>{
                resolve(result);
            })
            .on('error',(error)=>{
                reject(error)
            })
    })
}
module.exports = {readCSV}