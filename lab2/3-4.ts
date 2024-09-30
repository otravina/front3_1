interface IProducts2 {
    [key: string]: ICategory2
}

interface ICategory2 {
    [key: string]: CProduct[]
}

class CProduct {
    private static maxId: number = 0;
    readonly id: number;
    size: number;
    color: string;
    price: number;

    //4
    private _discount?: number;
    private _finalPrice: number;

    constructor(size: number, color: string, price: number, discount?: number) {
        this.id = ++CProduct.maxId;
        this.size = size;
        this.color = color;
        this.price = price;

        this._discount = discount;
        this._finalPrice = this.calculateFinalPrice();
    }

    private calculateFinalPrice(): number {
        return this._discount ? this.price - this.price * this._discount / 100 : this.price;
    }

    get finalPrice(): number {
        return this._finalPrice;
    }

    set finalPrice(value: number) {
        this._discount = value < this.price ? 100 - (value / this.price) * 100 : 0;
        this._finalPrice = value;
    }

    get discount(): number | undefined {
        return this._discount;
    }

    set discount(value: number | undefined) {
        this._discount = value;
        this._finalPrice = this.calculateFinalPrice();
    }
}

const products2: IProducts2 = {
    shoes: {
        boots: [
            new CProduct(42, 'black', 120),
            new CProduct(43, 'brown', 130)
        ],
        sneakers: [
            new CProduct(41, 'white', 100),
            new CProduct(42, 'blue', 110)
        ],
        sandals: [
            new CProduct(40, 'black', 80),
            new CProduct(41, 'brown', 85)
        ]
    }
};

//show usages of the class
products2.shoes.boots.forEach(p => console.log(p));

//show usages of getters and setters
let test_product: CProduct = products2.shoes.boots[0];
console.log(test_product.finalPrice);
test_product.finalPrice = 100;
console.log(test_product.finalPrice);
console.log(test_product.discount);
test_product.discount = 10;
console.log(test_product.discount);
console.log(test_product.finalPrice);
