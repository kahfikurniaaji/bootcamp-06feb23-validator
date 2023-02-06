const validator = require('validator');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Nama : ', name => {
    readline.question('No HP : ', phone => {
        if (!validator.isMobilePhone(phone, 'id-ID')) {
            readline.close();
            console.log(`No HP tidak valid!`);
            return;
        }
        readline.question('Email : ', email => {
            if (!validator.isEmail(email)) {
                readline.close();
                console.log(`Email tidak valid!`);
                return;
            }
            console.log(`Nama Saya ${name}`);
            console.log(`No HP Saya ${phone}`);
            console.log(`Email Saya ${email}`);
            readline.close();
        });
    });
});