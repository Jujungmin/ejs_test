const fs = require('fs');

console.log('파일을생성합니다.');
fs.writeFile('.sample.txt', 'hello world', function(err) {
    if(err) throw err;
    console.log('파일이생성되었습니다');
});
console.log('파일생성중!');

// https://m.blog.naver.com/izure/222080523265