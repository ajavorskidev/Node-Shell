
module.exports = function (cmd, done) {
    if (cmd === 'pwd') {
        done(process.cwd());
    }
}
