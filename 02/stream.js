// 파일 시스템 모듈 불러오기
const fs = require('fs');

// ./files/lorem.txt 읽고 ./files/new-lorem.txt에 쓰기
const rs = fs.createReadStream('./files/lorem.txt', { encoding: 'utf8' });
const ws = fs.createWriteStream('./files/new-lorem.txt');

// rs.on('data', (dataChunk) => ws.write(dataChunk));

//읽기와 쓰기를 파이프로 연결
rs.pipe(ws);
