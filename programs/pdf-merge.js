import PDFMerger from 'pdf-merger-js'

 
const merge= async (src,dest) => {
  var merger = new PDFMerger();
  src.forEach(e=>{
    merger.add(e);
  })

  await merger.save(dest); 
};

export default merge;