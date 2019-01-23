#!/usr/bin/env node
var axios = require('axios');
var validator = require('email-validator');
const chalk = require('chalk');
var figlet = require('figlet');
const ora = require('ora');
const {NODE_ENV} = process.env;
let [, , text] = process.argv;

figlet('Hello World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});




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

            log(text+ chalk.red(' has been powned on : ') + element.Domain);

        });

    })
    .catch(function (error) {
        if (error.request.res.statusCode == 404){
            console.log('This e-mail adress is safe.');
        }
        else {
            console.log('A problem in the server has occured, please retry.');
        }
    });
} 

else {
    console.log('This e-mail is not valid; please check syntax.');
};


            