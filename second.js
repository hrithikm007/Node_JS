// ( function(exports,require,module,__filename,__dirname){
harry = {
    name : 'harry',
    fav : 7,
    dev: true
}

console.log('Module Wrapper\n',exports,require,module,__filename,__dirname)
module.exports = harry

// })
// All modules in node js are wrapped like this called as Module Wrapper Function