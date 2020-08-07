const request = require('request')

module.exports = function(args, done){
  request(args[1], function(error, response, body){
    done('error:', error);
    done('statusCode:', response && response.statusCode);
    done('body:', body)
  })
}
