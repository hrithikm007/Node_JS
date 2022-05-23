const path = require('path')

a1 = path.basename('/foo/bar/baz/asdf/quux.html');
// Returns: 'quux.html' basically quux.html is base name of that passed path
console.log(a1)

a2 = path.dirname('/foo/bar/baz/asdf/quux.html');
// Returns: '/foo/bar/baz/asdf' basically will just print the folder names of the path
console.log(a2)

a3 = path.extname('hrithik.html')
// It Prints the File Extension
console.log(a3) 

a4 = path.extname(__filename)
console.log(a4,'__FILENAME IS',__filename)
