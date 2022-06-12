// TODO: import module bila dibutuhkan di sini
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCb) => {
  const output = [];
  const allFiles = {file1, file2, file3};

  const readWithCb = (fileToRead) => {
    fs.readFile(fileToRead, {encoding: 'utf-8'}, (dataErr, data) => {
      if(dataErr || !data){
        fnCb(dataErr, null);
        return;
      };

      const parsedData = JSON.parse(data);

      let msg;
      switch (fileToRead) {
        case file1:
          msg = parsedData.message;
          break;
        case file2:
          msg = parsedData[0].message;
          break;
        case file3:
          msg = parsedData[0].data?.message;
          break;
      };
      output.push(msg.split(" ")[1]);
      if(output.length === Object.keys(allFiles).length){
        fnCb(null, output);
      };
    });
  };
  for(const file in allFiles){
    readWithCb(allFiles[file]);
  };
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
