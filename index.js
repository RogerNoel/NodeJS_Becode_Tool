#!/usr/bin/env node
var axios = require('axios');
var validator = require('email-validator');
const chalk = require('chalk');
const ora = require('ora');
const {NODE_ENV} = process.env;
let [, , text] = process.argv;


let valid = validator.validate(text);
let log = console.log;

log(chalk.yellow(chalk.underline.bgBlue.bold('Charlie welcomes you !') + '!'));

if (valid) {
        console.log('Valid e-mail -> waiting for server response.');
    
    var url = ('https://haveibeenpwned.com/api/v2/breachedaccount/' + text);
    
    axios.get(url, {
        headers: {
            'User-Agent': 'rupownd'
        }
    })
    .then(function (response) {
        response.data.forEach(element => {

            log(chalk.red(chalk.bgWhite(text + ' has been powned on : ' + element.Domain)));

        });

    })
    .catch(function (error) {
        if (error.request.res.statusCode == 404){
            log(chalk.green(chalk.bgWhite.bold('This e-mail adress is safe.')));
        }
        else {
            console.log('A problem in the server has occured, please retry.');
        }
    });
} 

else {
    console.log('This e-mail is not valid; please check syntax.');
};


            