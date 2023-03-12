// 파일 읽기 (file-system)
const fs = require('fs');

fs.readFile('test.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

//파일 쓰기
fs.writeFile('test1.txt', str, 'utf-8', function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('파일쓰기 완료!');
  }
});
