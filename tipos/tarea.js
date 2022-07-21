"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    console.log({ batman, superman, existe });
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    console.log({ parejaHeroes, villano });
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    console.log({ aliados });
    //Enumeraciones
    let SuperHero;
    (function (SuperHero) {
        SuperHero[SuperHero["aquaman"] = 0] = "aquaman";
        SuperHero[SuperHero["batman"] = 1] = "batman";
        SuperHero[SuperHero["flash"] = 5] = "flash";
        SuperHero[SuperHero["superman"] = 100] = "superman";
    })(SuperHero || (SuperHero = {}));
    const fuerzaFlash = SuperHero.flash;
    const fuerzaSuperman = SuperHero.superman;
    const fuerzaBatman = SuperHero.batman;
    const fuerzaAquaman = SuperHero.aquaman;
    console.log({ fuerzaFlash, fuerzaSuperman, fuerzaBatman, fuerzaAquaman });
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    console.log(activar_batiseñal());
    pedir_ayuda();
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log({ largoDelPoder });
    let enumeracion;
    (function (enumeracion) {
        enumeracion[enumeracion["a"] = 10] = "a";
        enumeracion[enumeracion["b"] = 11] = "b";
        enumeracion[enumeracion["c"] = 9] = "c";
        enumeracion[enumeracion["d"] = 10] = "d";
    })(enumeracion || (enumeracion = {}));
    console.log({ enumeracion });
})();
