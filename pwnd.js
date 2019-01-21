/* - coder un outil qui recevra une adresse email en paramètre, comme ceci : $ myNodeCLITool leny@test.com */
/* - Le programme vérifiera que le paramètre est bien une adresse email correctement formattée */
/*  - puis fera une requête HTTP vers l'API du service Have I been pwned? */
/* - Vous afficherez ensuite les résultats de la requête de manière lisible dans le terminal. */

/* - Packages : - isemail -> pour vérifier une adresse email
                - axios -> pour effectuer des requêtes HTTP */

var axios = require('axios');
var validator = require('email-validator');

let valid = validator.validate('bebert@gmail.com');
/* TODO traiter les différents cas */

/* GET https://haveibeenpwned.com/api/v2/breachedaccount/{account} */

axios.get('https://haveibeenpwned.com/api/v2/breachedaccount/noel.roger.pro@gmail.com', {
        headers: {
            'User-Agent': 'pwnd-checker'
        }
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });