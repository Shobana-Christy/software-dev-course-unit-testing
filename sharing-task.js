function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    if (discountRate < 0 || discountRate >= 1) return null;
    if (discountRate >= 0 && discountRate < 1) return price * (1 - discountRate);
    return null;
};

function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return [];
    // TODO: Implement filtering logic 
    return products.filter(callback);
}

// let productArr = [
//     { name: "a", price: 800, isAvailable: false },
//     { name: "c", price: 700, isAvailable: true },
//     { name: "b", price: 500, isAvailable: true},
//     { name: "d", price: 200, isAvailable: false},
// ];
// let filterByProductPrice = (product => product.isAvailable === true && product.price >= 500);
// console.log(filterProducts(productArr, filterByProductPrice));

function sortInventory(inventory, key, asc) {
    if (!Array.isArray(inventory) || typeof key !== 'string') return [];
    let sortByProducts = inventory.sort((product1, product2) => {
        if (convertLowerCase(product1[key]) > convertLowerCase(product2[key])) {
            return asc ? 1 : -1;
        } else if (convertLowerCase(product1[key]) < convertLowerCase(product2[key])) {
            return asc ? -1 : 1;
        } else {
            return 0;
        }
    });
    return sortByProducts;
}

function convertLowerCase(value){
    if(typeof value == "string"){
        return value.toLowerCase();
    }
    return value;
}
// console.log("sort by name ", sortInventory(productArr, 'name', true));
// console.log("sort by price ", sortInventory(productArr, 'price', false));
// console.log("sort by isAvailable ", sortInventory(productArr, 'isAvailable', false));

// function sortInventory(inventory, key) {
//     if (!Array.isArray(inventory) || typeof key !== 'string') return [];
//     // TODO: Implement sorting logic
//     let sortByPrice = (product1, product2) => {
//         if (product1.price > product2.price)
//             return 1;
//         else if (product1.price < product2.price)
//             return -1;
//         else
//             return 0;
//     };
//     let sortByName = (product1, product2) => {
//         if (product1.name > product2.name)
//             return 1;
//         else if (product1.name < product2.name)
//             return -1;
//         else
//             return 0;
//     };
//     let sortByAvailability = (product1, product2) => {
//         if (product1.isAvailable && !product2.isAvailable)
//             return 1;
//         else if (!product1.isAvailable && product1.isAvailable)
//             return -1;
//         else
//             return 0;
//     };

//     inventory.sort((product1, product2) => {
//         // if key = price
//         // return by calling sortyByPrice fn
//         // else if key = name
//         // return by calling sortByName fn
//         // else return by calling sortyByAvailability fn
//         if(key == "price"){
//             return sortByPrice(product1, product2);
//         } else if (key == "name") {
//             return sortByName(product1, product2);
//         } else {
//             return sortByAvailability(product1, product2);
//         }
//     } );
// }

// console.log(sortInventory(productArr, "name"));
// console.log(sortInventory(productArr, 'price'));
// console.log(sortInventory(productArr, 'isAvailable'));



// console.log(calculateDiscount(100, "discount"));
// console.log(calculateDiscount("price", 0));
// console.log(calculateDiscount(100, -1));
// console.log(calculateDiscount(100, 4));
// console.log(calculateDiscount(100, 0));
// console.log(calculateDiscount(100, 0.2));
// console.log(calculateDiscount(100, .1));




module.exports = { calculateDiscount, filterProducts, sortInventory }