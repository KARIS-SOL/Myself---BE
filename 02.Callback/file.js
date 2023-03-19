// // 파일 읽기 (file-system)
// const fs = require('fs');

// // method - readFile needed
// // fs.readFile('파일위치', '유니코드포맷', callback(err, data) {})
// fs.readFile('test.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// 파일 쓰기
const fs = require('fs');

const str = '파일쓰기가 정상적으로 되는지 테스트 합니다';

fs.writeFile('test1.txt', str, 'utf-8', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('writefile succeed');
  }
});
