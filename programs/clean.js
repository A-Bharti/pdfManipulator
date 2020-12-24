import fs from 'fs'

const clean = () => {

  let directoryPath = './generate/';
  fs.readdir(directoryPath, function (err, files) {
    files.forEach(function (file) {
      fs.unlink(directoryPath + file, () => { });
    });
  });

   let directoryPath2 = './upload/';
    fs.readdir(directoryPath2, function (err, files) {
      files.forEach(function (file) {
        fs.unlink(directoryPath2 + file, () => { });
      });
    });

}

export default clean;