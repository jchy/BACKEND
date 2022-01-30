const fs = require('fs');
const path = require('path');

fs.writeFileSync('name.txt', "I am  Jaswant Chaudhary",(err)=>{
    if(err){
        console.log(err);
    }
    console.log("file is created and written")
    return;
});

fs.mkdirSync(path.join(__dirname,'meta2'),(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("folder Created");
})

fs.renameSync(path.join(__dirname,'name.txt'), path.join(__dirname,'meta2','my_name.txt'),(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("file Renamed");
    return;
});






