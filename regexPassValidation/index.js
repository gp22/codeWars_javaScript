/*
    You need to write regex that will validate a password to make sure
    it meets the following criteria:

        At least six characters long
        contains a lowercase letter
        contains an uppercase letter
        contains a number

    Valid passwords will only be alphanumeric characters.
*/
'use strict';

let str = 'djI38D55';
console.log(validate(str));
str = 'asdfoivooiasv';
console.log(validate(str));
str = 'ASDF6ooiasv';
console.log(validate(str));

function validate(password) {
  return /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]){6,})/.test(password);
}