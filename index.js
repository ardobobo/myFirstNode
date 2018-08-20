
const fs = require('fs');
const path = require('path');
const resizeImg = require('resize-img');

const origDir = path.join(__dirname, '/images/orig/')
const distDir = path.join(__dirname, '/images/dist/')

if(!fs.existsSync('distDir')) {
    fs.mkdirSync('distDir');
}

const fileName = 'pic1.jpeg';
 
resizeImg(fs.readFileSync(origDir + fileName), {width: 128, height: 128}).then(buf => {
    fs.writeFileSync(distDir + fileName, buf);
});

// 1. resize image base on the original image dimension NOTE: use package "image-size"


// 2. resize all images in the orig folder at once NOTE: use array forEach or for loop


// const myModule = require('./module');

// myModule('hello node');


// fs.writeFile('./test.txt','hello the world',(err) => {
//     if(err){
//         console.log(err);
//     }
//     fs.readFile('./test.txt',(err,data)=>{
//         console.log(data.toString());
//     })
// });


