// 파일 시스템 모듈에 promise 달기
const fsPromises = require('fs').promises;

// 경로 알려주는 path 모듈 가져오기
const path = require('path');

// 비동기 async await로 함수 실행
const fileOps = async () => {
  try {
    // starter.txt 데이터 읽기
    const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
    console.log(data);
    // starter.txt 파일 삭제
    await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'));
    // 파일 쓰기
    await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
    // 파일 내용 추가
    await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nNice to meet you.');
    // 파일 이름 변경
    await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'));
    const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8');
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
};

// 함수 호출
fileOps();

/*
  // reply.txt에 'Nice to meet you' 작성
  fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you', (err) => {
  if (err) throw err;
  console.log('Write complete');

  // 기존 파일에 내용 추가
  fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nYes it is', (err) => {
    if (err) throw err;
    console.log('Appended complete');

    // 파일 rename
    fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
      if (err) throw err;
      console.log('Rename complete');
    });
  });
});
*/

// 에러 발생시 console에 출력 후 exit
process.on('uncaughtException', (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
