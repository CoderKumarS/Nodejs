//create a buffer
// const buffer=Buffer.alloc(5);
// console.log(buffer);

// write in buffer
// buffer.write('Hello','utf-8');
// console.log(buffer);

// reading data from buffer
// const data =buffer.toString('utf-8');
// console.log(data);

// concatenating Buffers
const buffer1 = Buffer.from('Hello','utf-8');
const buffer2 = Buffer.from(' World','utf-8');
const concatenatedBuffer = Buffer.concat([buffer1,buffer2]);

console.log(concatenatedBuffer.toString('utf-8'));