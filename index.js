#!/usr/bin/env node
var axios = require('axios');
var validator = require('email-validator');

const {NODE_ENV} = process.env;
let [, , text] = process.argv;

let valid = validator.validate(text);
if (valid) {
    console.log('Valid e-mail -> waiting for server response.');


var url = ('https://haveibeenpwned.com/api/v2/breachedaccount/' + text);

var retour = new Array ();

axios.get(url, {
        headers: {
            'User-Agent': 'rupownd'
        }
    })
    .then(function (response) {
        response.data.forEach(element => {
            console.log(text+ ' has been powned on : ' + element.Domain);
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