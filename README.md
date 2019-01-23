# Charlie Check Powned ReadMe

## What is it ?
This Charlie Check Powned utility is an e-mail checker; it checks wether an e-mail address has been corrupted or not.  
In affirmative case, it will display the domain name(s) where the e-mail adress was corrupted.

## How to use it ?

### Installation WARNING !!! Global installation required (-g).
$ npm i -g charlie-check-powned

### Usage
Just type 'charliecp' (without curly quotes) followed by the e-mail adress to check, for example:  
*charliecp youradress@whatever.com*  
The module will first check the syntax validity of the e-mail adress: in case of invalid entry,  
*This e-mail is not valid; please check syntax* will be displayed.  
When a valid e-mail adress is entered, a first message will appear:  
*Valid e-mail -> waiting for server response*  
Followed short time after by the checking results:  
- *This e-mail adress is safe.* -> for a clean e-mail adress;
- *test@example.com has been powned on : gaadi.com* -> telling you on which domain the e-mail has been corrupted.  
The server may sometimes be down, or may not respond for whaterver cause; in this case, the following message will be displayed:  
*A problem in the server has occured, please retry.*  

### Dependencies
[email-validator](https://www.npmjs.com/package/email-validator)  
[axios](https://www.npmjs.com/package/axios)  

## Credit
[The 'Have I Been Powned' API](https://haveibeenpwned.com/) for providing datas.  
[Becode](https://www.becode.org/) -> for sharing knowledge.  
Our beloved coaches ;-)  
Those who helped me achieve this (y)  
Please report any problem you could find.  
Thank you for visiting this page.
