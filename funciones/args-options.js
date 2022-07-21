"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'No lastname'}`;
    };
    const user = fullName('Fernando');
    console.log(user);
    const frase = (phrase = 'Mensaje') => {
        return `${phrase}`;
    };
    const prueba = frase();
    console.log(prueba);
    const suma = (numOne, numTwo) => {
        return numOne + numTwo || 0;
    };
    const result = suma(1);
    console.log(result);
})();
