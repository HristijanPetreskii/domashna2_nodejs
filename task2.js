// Use append to append data and then read the new data appended


const fs=require('fs');

fs.appendFile("task2.txt","appended data" ,(err)=>{
    if(err){
        console.error("Error message ",err);
    }else{
        console.log("appended data");
        readdata();
    }
});

function readdata(){
    fs.readFile('task2.txt','utf-8', (err,data)=>{
        if(err){
            console.error("Error message ",err);
        }
        else{
            console.log("appended data: ",data);
        }
    })
}