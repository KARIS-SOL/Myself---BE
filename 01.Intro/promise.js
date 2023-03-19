// promise 는 생성자이므로 new 가 붙어야함
const pormise = new Promise(function (resolve, reject) {
  const tetz = 'old';
  if (tetz === 'old') {
    setTimeout(() => {
      resolve('tetz is old');
    }, 3000);
  } else {
    reject('tetz is getting old');
  }
});

promise
  .then(function (data) {
    console.log(data);
  })
  .catch(function (data) {
    console.log(data);
  });
