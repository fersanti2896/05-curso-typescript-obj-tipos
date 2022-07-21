"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const user = fullName('Fernando', 'Nicolás');
    console.log(user);
    const frase = (phrase = 'Mensaje') => {
        return `${phrase}`;
    };
    const prueba = frase();
    console.log(prueba);
})();
