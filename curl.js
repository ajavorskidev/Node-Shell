const request = require('request')

module.exports = function(args){
  request(args[1], function(error, response, body){
    process.stdout.write('error:', error);
    process.stdout.write('statusCode:', response && response.statusCode);
    process.stdout.write('body:', body)
  })
}
