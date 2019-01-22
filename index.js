/* - coder un outil qui recevra une adresse email en paramètre, comme ceci : $ myNodeCLITool leny@test.com */
/* - Le programme vérifiera que le paramètre est bien une adresse email correctement formattée */
/*  - puis fera une requête HTTP vers l'API du service Have I been pwned? */
/* - Vous afficherez ensuite les résultats de la requête de manière lisible dans le terminal. */

/* - Packages : - isemail -> pour vérifier une adresse email
                - axios -> pour effectuer des requêtes HTTP */

//#!/usr/bin/env node

var axios = require('axios');
var validator = require('email-validator');

const {
    NODE_ENV
} = process.env;
let [, , text] = process.argv;
// test - > console.log(text);

let valid = validator.validate(text);
/* TODO traiter les différents cas */
if (valid) {
    console.log('ça roule');
} else {
    console.log('ça puwe')
};

var url = ('https://haveibeenpwned.com/api/v2/breachedaccount/' + text);
// console.log(url);

var retour = new Array ();

axios.get(url, {
        headers: {
            'User-Agent': 'rupownd'
        }
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });