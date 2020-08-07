const pwd = require('./pwd')
const ls = require('./ls')
process.stdout.write('prompt >');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    switch(cmd) {
        case 'pwd':
            pwd(cmd)
            break;
        case 'ls':
            ls(cmd)
            break;
        default:
            process.stdout.write('\nERROR: NO COMMAND FOUND');

    }
    process.stdout.write('\nprompt > ');
})