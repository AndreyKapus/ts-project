"use strict";
;
let car;
car = {
    brand: 'Audi',
    model: '100',
    start(push) {
        console.log(push, this.brand);
    }
};
car.start('wrun-wrun');
//# sourceMappingURL=practice.js.map