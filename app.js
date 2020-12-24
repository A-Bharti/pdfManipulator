import express from 'express'
import multer from 'multer'
import generateUniqueId from 'generate-unique-id'
import imageToPdf from './programs/image-pdf.js'
import mergePdf from './programs/pdf-merge.js'
import clean from './programs/clean.js'



const app=express();
const upload=multer({dest:'upload/'})

app.get('/',(req,res)=>{
    res.sendfile('./index.html');
})
app.post('/imageconvert',upload.array('myfile'),(req,res)=>{
    console.log(req.files);
    let filename_array=[];
    req.files.forEach(e=>{
        filename_array.push(e.path);
    })
    const id = generateUniqueId();
    imageToPdf(filename_array,"./generate/"+id+".pdf").then(()=>{
        res.sendfile("./generate/"+id+".pdf");
    });
  
   
})
app.post('/pdfmerge',upload.array('myfile'),(req,res)=>{
    console.log(req.files);
    let files_array=[];
    req.files.forEach(e=>{
      files_array.push(e.path);
    })
    const id = generateUniqueId();
   mergePdf(files_array,"./generate/"+id+".pdf").then(()=>{
    res.sendfile("./generate/"+id+".pdf");
   }).catch((e)=>{
       console.log(e);
   });

   
   
})
setInterval(clean,3600000);


app.listen(process.env.PORT || 5000,()=>{
    console.log('server running.')
});
