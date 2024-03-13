//1. Local module for file write and read


const importmessage=require('./task1a.js');

importmessage.writeFile("task1.txt",'print this!',(err)=>{
  if(err){
    console.error("Error message!");
  }else{
    console.log("Succesfull");
  }
});

importmessage.readFile("task1.txt",(err,data)=>{
    if(err){
        console.error("Error message! ",err);
    }else{
        console.log("the data is: ",data);
    }
});