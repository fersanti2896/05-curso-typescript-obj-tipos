"use strict";
(() => {
    // Funciones Básicas
    function sumar(a, b) {
        return a + b;
    }
    console.log(`Suma: ${sumar(1, 2)}`);
    const contar = (heroes) => {
        return heroes.length;
    };
    const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    console.log(`Número de Heróes: ${contar(superHeroes)}`);
    //Parametros por defecto
    const llamarBatman = (llamar = false) => {
        if (llamar) {
            console.log("Batiseñal activada");
        }
    };
    llamarBatman(true);
    // Rest?
    const unirheroes = (...personas) => {
        return personas.join(' ');
    };
    const lastName = 'Son';
    const name = 'Gokú';
    console.log(unirheroes(lastName, name));
    // Tipo funcion
    const noHaceNada = (numero, texto, booleano, arreglo) => { };
    // Crear el tipo de funcion que acepte la funcion "noHaceNada"
    let noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
    console.log({ noHaceNadaTampoco });
})();
