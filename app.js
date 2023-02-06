const validator = require('validator');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Nama : ', name => {
    readline.question('No HP : ', phone => {
        if (validator.isMobilePhone(phone, 'id-ID')) {
            readline.question('Email : ', email => {
                if (validator.isEmail(email)) {
                    console.log(`Nama Saya ${name}`);
                    console.log(`No HP Saya ${phone}`);
                    console.log(`Email Saya ${email}`);
                } else {
                    console.log(`Email tidak valid!`);
                }
            });
        } else {
            console.log(`No HP tidak valid!`);
        }
        readline.close();
    });
});