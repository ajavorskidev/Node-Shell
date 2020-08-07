const pwd = require('./pwd')
const ls = require('./ls')
const cat = require('./cat')
const curl = require('./curl')
process.stdout.write('prompt >');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    let args = cmd.split(' ');
    switch(args[0]) {
        case 'pwd':
            pwd(args[0], done)
            break;
        case 'ls':
            ls(args[0], done)
            break;
        case 'cat':
            cat(args, done);
            break;
        case 'curl':
            curl(args, done)
            break;
        default:
            process.stdout.write('\nERROR: NO COMMAND FOUND');

    }
    process.stdout.write('\nprompt > ');
})

// module.exports = function(output){
//     process.stdout.write(output)
//     process.stdout.write('\nprompt > ')
// }

const done = (output) => {
    process.stdout.write(output)
    process.stdout.write('\nprompt > ')
}
