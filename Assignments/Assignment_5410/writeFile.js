const fs = require('fs');
const path = require('path');

fs.writeFile('name.txt', "I am  Jaswant Chaudhary",(err)=>{
    if(err){
        console.log(err);
    }
    console.log("file is created and written")
    return;
});

fs.mkdir(path.join(__dirname,'meta'),(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("folder Created");
})

fs.rename(path.join(__dirname,'name.txt'), path.join(__dirname,'meta','my_name.txt'),(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("file Renamed");
    return;
});






