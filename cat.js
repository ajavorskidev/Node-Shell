const fs = require('fs');
const done = require('./bash')

module.exports = function (args) {
        fs.readFile(args[1],(err, data) => {
            if (err) throw err;
            done(data)});
    // args[0] is command
    // args[1] is fileName
    }
