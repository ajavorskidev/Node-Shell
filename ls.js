const fs = require('fs');
module.exports = function (cmd, done) {
    if (cmd === 'ls') {
        fs.readdir('./', 'utf8', (err, files) => {
            if (err) {
                throw err
            } else {
                done(files.join('\n'))
                done("\nprompt > ");
            }
        })
    }
}
