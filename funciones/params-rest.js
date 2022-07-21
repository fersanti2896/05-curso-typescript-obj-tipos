"use strict";
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const hero = fullName('Tony', 'Stark', 'IroMan');
    console.log(hero);
})();
