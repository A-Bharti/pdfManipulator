import imageToPdf from 'images-to-pdf'

const convert= async (src,dest)=>{
    // console.log(src)
    await imageToPdf(src, dest);
}
export default convert;

