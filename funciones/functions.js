"use strict";
(() => {
    const hero = 'Flash';
    function returnName(hero) {
        return hero;
    }
    console.log(returnName(hero));
    const activateBatiSignal = () => {
        return 'Batiseñal activada!';
    };
    console.log(activateBatiSignal());
    const heroName = returnName(hero);
    console.log({ heroName });
})();
