const fs=require('fs');

const readFile=(filepath,message)=>{
    fs.readFile(filepath,'utf-8',(err,data)=>{
          if(err){
            message(err,null);//second parameter (which would typically hold the result or data) is set to null to indicate that no valid data is being returned due to the error.
          }else{
            message(null,data);//there is not error and thats why 1parameter is null and 2 is data
          }
    });
};


const writeFile=(filepath,data,message)=>{
    fs.writeFile(filepath,data,'utf-8', (err)=>{
        if(err){
            message(err);
        }else{
            message(null);
        }
    });
};

module.exports={
    readFile,
    writeFile
}