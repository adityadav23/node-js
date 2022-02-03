const path = require('path')

//returns platform specific separator
console.log(path.sep)

// the join function joins the file path using separator
const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)

//absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder','test.txt')

console.log(absolute)