const zlib = require('zlib');
const input = 'Hello World';
zlib.gzip(input,(err,compressedData)=>{
    if (err) {
        console.error('Error compressing data:',err);
        return;
    }
    // console.log(compressedData.toString());
    zlib.gunzip(compressedData,(err,deCompressedData)=>{
        if (err) {
            console.error('Error decompressing data:', err);
        }
        console.log(deCompressedData.toString());
    });
});