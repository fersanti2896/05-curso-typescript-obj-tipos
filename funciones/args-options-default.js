"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        return upper ? `${firstName} ${lastName || 'No lastName'}`.toUpperCase()
            : `${firstName} ${lastName || 'No lastName'}`;
    };
    const name = fullName('Fernando', 'Santiago');
    console.log(name);
})();
