interface Icar {
    brand: string;
    model: string;

    start(push: string): void;
};

let car: Icar;

car = {
    brand: 'Audi',
    model: '100',

    start(push: string) {
        console.log(push, this.brand)
    }
}

car.start('wrun-wrun')