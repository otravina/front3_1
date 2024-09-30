interface IProducts {
    [key: string]: ICategory
}

interface ICategory {
    [key: string]: IProduct[]
}

interface IProduct {
    readonly id: number;
    size: number;
    color: string;
    price: number;
}

const products: IProducts = {
    shoes: {
        boots: [
            { id: 1, size: 42, color: 'black', price: 120 },
            { id: 2, size: 43, color: 'brown', price: 130 }
        ],
        sneakers: [
            { id: 3, size: 41, color: 'white', price: 100 },
            { id: 4, size: 42, color: 'blue', price: 110 }
        ],
        sandals: [
            { id: 5, size: 40, color: 'black', price: 80 },
            { id: 6, size: 41, color: 'brown', price: 85 }
        ]
    }
};

function getAll(): IProduct[] {
    let items: IProduct[] = [];
    for(let _products of Object.values(products)) {
        for(let _categories of Object.values(_products)) {
            _categories.forEach(item => {
                items.push(item)
            })
        }
    }
    return items;
}

// console.log(getAll());

interface IFilterOptions {
    price?: {
        max?: number;
        min?: number
    }
    size?: number;
    color?: string;
}

function findProduct(options: IFilterOptions): IProduct[] {
    return getAll().filter(p => {
        return p.price <= (options.price?.max ?? p.price) &&
            p.price >= (options.price?.min ?? p.price) &&
            p.size === (options.size ?? p.size) &&
            p.color === (options.color ?? p.color);
    });
}

findProduct({ price: { min: 80} }).forEach(p => console.log(p));

