const { format } = require('date-fns');
const {v4: uuid} = require('uuid');

console.log(format(new Date(), 'yyyy년 MM월 dd일\tHH시 mm분 ss초'));

console.log(uuid())

console.log()
