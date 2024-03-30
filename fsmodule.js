const {readFileSync,writeFileSync, read} =require('fs')
const first=readFileSync('./content/new1.txt','utf8')
const second=readFileSync('./content/new2.txt','utf8')

console.log(first,second)
writeFileSync('./content/new3.txt',`the result of both files:${first},${second}`)
// console.log()
