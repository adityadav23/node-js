//Modules - Encapsulate Code (only share minimum)
//Node uses commonJS library so every file in node is a Module already

const name = require('./names')
const sayHi = require('./utils')

sayHi(name.john)
sayHi(name.peter)
