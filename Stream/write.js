var fs = require('fs');
//create a writeable stream to write data to a file
const writeableStream=fs.createWriteStream('output.txt');

// data to written
const data=['Hello World!\n','This is a test.\n'];

// write data in chunks
data.forEach(chunk=>{
    writeableStream.write(chunk);
})

// End the writeable stream to indicate that no more data will be written
writeableStream.end();