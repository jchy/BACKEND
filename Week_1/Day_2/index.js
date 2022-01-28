// use fs, and path modules
// 1. create a new fiule with some data

const fs = require('fs');
const path = require('path');
fs.readFile(path.join(__dirname, 'hello.txt'), 'utf8', (err, data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
});

fs.readFileSync(path.join(__dirname, 'hello.txt'), 'utf8', (err, data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
});

// 2. write to a file
fs.writeFile(path.join(__dirname, 'hello.txt'),"I am jaswant signing in", err=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("file created");
});
fs.writeFileSync(path.join(__dirname, 'hello.txt'),"I am jaswant signing out", err=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("file created");
});

// fs.rename("hello.txt", "intro.txt",(err)=>{
//     if(err){
//         return;
//     }
//     console.log("File renamed")
// })
fs.renameSync("hello.txt", "hello2.txt",(err)=>{
    if(err){
        return;
    }
    console.log("File renamed")
})