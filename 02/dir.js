const fs = require('fs');

// new 폴더가 없다면 생성
if (!fs.existsSync('./new')) {
  fs.mkdir('./new', (err) => {
    if (err) throw err;
    console.log('Directory created');
  });

  // new 폴더가 있다면 제거
  if (fs.existsSync('./new')) {
    fs.rmdir('./new', (err) => {
      if (err) throw err;
      console.log('Directory removed');
    });
  }
}
