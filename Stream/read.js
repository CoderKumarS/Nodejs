var fs = require('fs');
//create a readable stream with a smaller chunk size(e.g, 64 bytes)
const readableStream=fs.createReadStream('example.txt',{encoding:'utf-8', highWaterMark:64});

// listen for the 'data ' event, which indicates that a chunk of data is available
readableStream.on('data',(chunks)=>{
    console.log('Received chunk of data: ');
    console.log(chunks);
});

// listen for the 'end ' event, which indicates that all data has been read
readableStream.on('end',()=>{
    console.log('Finished reading data from the file.');
})
// listen for the 'data ' event, which indicates that a chunk of data is available
readableStream.on('error',(err)=>{
    console.log('Error reading data',err);
})