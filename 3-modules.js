// CommonJs, every file is module (by default)
// Modules - Encapsulated Code (only share minimun)

const names = require('./4-name')
const sayHi = require('./5-utils')
require('./6-mind-grenade')

sayHi('mary')
sayHi(names.john)
sayHi(names.peter)
