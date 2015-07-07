
var fs = require('fs')
fs.readFile('./provinces.json', 'utf-8', function (err, str) {
  str = str.replace(/\",\"/g, '", "')
  str = str.replace(/\{\"/g, '{ "')
  str = str.replace(/\"\}/g, '" }')
  str = str.replace(/\":\"/g, '": "')
  fs.writeFileSync('./provinces.json', str)
})
