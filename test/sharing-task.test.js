const sharingTask = require('../sharing-task.js');

describe("The calculateDiscount() function ", function () {
  // positive case
  test("applies a valid discount rate", () => {
    expect(sharingTask.calculateDiscount(100, 0.1)).toBe(90);
  });
  test("applies a valid discount rate", () => {
    expect(sharingTask.calculateDiscount(100, 0.2)).toBe(80);
  });

  //negative case
  test("handles an invalid discount rate gracefully", () => {
    expect(sharingTask.calculateDiscount(100, -0.1)).toBe(null);
  });
  test("handles an invalid discount rate gracefully", () => {
    expect(sharingTask.calculateDiscount(100, 1.1)).toBe(null);
  });

  //edge case
  test("handles edge case with price of 0", () => {
    expect(sharingTask.calculateDiscount(0, 0.2)).toBe(0);
  });
  test("handles edge case with price of 0", () => {
    expect(sharingTask.calculateDiscount(100, 0)).toBe(100);
  });
});



describe("The filter products() function ", function () {

  test("should return filtered products which are available and price greater than equal to 500 ", function () {
    let productArr = [
      { name: "laptop", price: 800, isAvailable: false },
      { name: "television", price: 700, isAvailable: true },
      { name: "mobile phone", price: 500, isAvailable: true },
      { name: "Tablet", price: 200, isAvailable: false }
    ];

    let filterByProductPrice = (product => product.isAvailable === true && product.price >= 500);
    let received = sharingTask.filterProducts(productArr, filterByProductPrice);
    let expected = [
      { name: "television", price: 700, isAvailable: true },
      { name: "mobile phone", price: 500, isAvailable: true }
    ];

    expect(received).toEqual(expected);
  });

  test("should return filtered products of the product's name which are available and price less than equal to 500 ", function () {
    let productArr = [
      { name: "laptop", price: 800, isAvailable: false },
      { name: "television", price: 700, isAvailable: true },
      { name: "mobile phone", price: 500, isAvailable: true },
      { name: "Tablet", price: 200, isAvailable: false }
    ];

    let filterByProductPrice = product => product.isAvailable === true && product.price <= 500 && product.name.toLowerCase() === "mobile phone";
    let received = sharingTask.filterProducts(productArr, filterByProductPrice);
    let expected = [
      { name: "mobile phone", price: 500, isAvailable: true }
    ];

    expect(received).toEqual(expected);
  });

  test("should return filtered products which are not available and price greater than equal to 500 ", function () {
    let productArr = [
      { name: "laptop", price: 800, isAvailable: false },
      { name: "television", price: 700, isAvailable: true },
      { name: "mobile phone", price: 500, isAvailable: true },
      { name: "Tablet", price: 200, isAvailable: false }
    ];

    let filterByProductPrice = product => product.isAvailable === false && product.price >= 500;
    let received = sharingTask.filterProducts(productArr, filterByProductPrice);
    let expected = [
      { name: "laptop", price: 800, isAvailable: false }
    ];

    expect(received).toEqual(expected);
  });

  test("should return filtered products which are not available and price greater than equal to 500 ", function () {
    let productArr = [
      { name: "laptop", price: 800, isAvailable: false },
      { name: "television", price: 700, isAvailable: true },
      { name: "mobile phone", price: 500, isAvailable: true },
      { name: "Tablet", price: 200, isAvailable: false }
    ];

    let filterByProductPrice = product => product.isAvailable === false && product.price <= 500;
    let received = sharingTask.filterProducts(productArr, filterByProductPrice);
    let expected = [
      { name: "Tablet", price: 200, isAvailable: false }
    ];

    expect(received).toEqual(expected);
  });


  test("should return empty array if products are not in an array ", function () {
    let product = {
      laptop: { name: "laptop", price: 800, isAvailable: false },
      television: { name: "television", price: 700, isAvailable: true }
    };
    let filterByProductPrice = (product => product.isAvailable === true && product.price >= 500);
    let received = sharingTask.filterProducts(product, filterByProductPrice);
    let expected = [];
    expect(received).toEqual(expected);
  });

  test("should return empty array if there is no callback function", function () {
    let productArr = [
      { name: "laptop", price: 800, isAvailable: false },
      { name: "television", price: 700, isAvailable: true },
      { name: "mobile phone", price: 500, isAvailable: true },
      { name: "Tablet", price: 200, isAvailable: false }
    ];
    let received = sharingTask.filterProducts(productArr);
    let expected = [];
    expect(received).toEqual(expected);

  })

  test("should return filtered products with specified name which are not available", function () {
    let productArr = [
      { name: "laptop", price: 800, isAvailable: false },
      { name: "television", price: 700, isAvailable: true },
      { name: "mobile phone", price: 500, isAvailable: true },
      { name: "Tablet", price: 200, isAvailable: false }
    ];
    let filterByProductPrice = (product => product.name.toLowerCase() === "laptop" && product.price >= 500 && product.isAvailable === false);
    let received = sharingTask.filterProducts(productArr, filterByProductPrice);
    let expected = [{ name: "laptop", price: 800, isAvailable: false }];
    expect(received).toEqual(expected);
  });

  test("should return filtered products with specified name, price greater than equal to 500 which are not available", function () {
    let productArr = [
      { name: "laptop", price: 800, isAvailable: false },
      { name: "television", price: 700, isAvailable: true },
      { name: "mobile phone", price: 500, isAvailable: true },
      { name: "Tablet", price: 200, isAvailable: false }
    ];
    let filterByProductPrice = (product => product.price >= 500 && product.isAvailable === false && product.name.toLowerCase() === "laptop");
    let received = sharingTask.filterProducts(productArr, filterByProductPrice);
    let expected = [
      { name: "laptop", price: 800, isAvailable: false }
    ];
    expect(received).toEqual(expected);
  });

});

describe("The sort inventory() function", function () {
  test("should return the sorted inventory by names in alphabetical order .", function () {
    let productArr = [
      { name: "laptop", price: 800, isAvailable: false },
      { name: "television", price: 700, isAvailable: true },
      { name: "mobile phone", price: 500, isAvailable: true },
      { name: "Tablet", price: 200, isAvailable: false }
    ];

    let received = sharingTask.sortInventory(productArr, "name", true);
    let expected = [
      { name: "laptop", price: 800, isAvailable: false },
      { name: "mobile phone", price: 500, isAvailable: true },
      { name: "Tablet", price: 200, isAvailable: false },
      { name: "television", price: 700, isAvailable: true }

    ]
    expect(received).toEqual(expected);
  });

  test("should return sorted inventory by prices from high to low ", function () {
    let productArr = [
      { name: "laptop", price: 800, isAvailable: false },
      { name: "television", price: 400, isAvailable: true },
      { name: "mobile phone", price: 500, isAvailable: true },
      { name: "Tablet", price: 200, isAvailable: false }
    ];
    let received = sharingTask.sortInventory(productArr, "price", false);
    let expected = [
      { name: "laptop", price: 800, isAvailable: false },
      { name: "mobile phone", price: 500, isAvailable: true },
      { name: "television", price: 400, isAvailable: true },
      { name: "Tablet", price: 200, isAvailable: false }
    ];
    expect(received).toEqual(expected);
  });

  test("should return sorted inventory by availability ", function () {
    let productArr = [
      { name: "laptop", price: 800, isAvailable: false },
      { name: "television", price: 700, isAvailable: true },
      { name: "mobile phone", price: 500, isAvailable: true },
      { name: "Tablet", price: 200, isAvailable: false }
    ];
    let received = sharingTask.sortInventory(productArr, "isAvailable", false);
    let expected = [
      { name: "television", price: 700, isAvailable: true },
      { name: "mobile phone", price: 500, isAvailable: true },
      { name: "laptop", price: 800, isAvailable: false },
      { name: "Tablet", price: 200, isAvailable: false }
    ]
    expect(received).toStrictEqual(expected);

  });

  test("should return the sorted inventory by names in reverse alphabetical order.", function () {
    let productArr = [
      { name: "laptop", price: 800, isAvailable: false },
      { name: "television", price: 700, isAvailable: true },
      { name: "mobile phone", price: 500, isAvailable: true },
      { name: "Tablet", price: 200, isAvailable: false }
    ];

    let received = sharingTask.sortInventory(productArr, "name", false);
    let expected = [
      { name: "television", price: 700, isAvailable: true },
      { name: "Tablet", price: 200, isAvailable: false },
      { name: "mobile phone", price: 500, isAvailable: true },
      { name: "laptop", price: 800, isAvailable: false }
    ]
    expect(received).toEqual(expected);
  });

  test("should return sorted inventory by prices from low to high ", function () {
    let productArr = [
      { name: "laptop", price: 800, isAvailable: false },
      { name: "television", price: 400, isAvailable: true },
      { name: "mobile phone", price: 500, isAvailable: true },
      { name: "Tablet", price: 200, isAvailable: false }
    ];
    let received = sharingTask.sortInventory(productArr, "price", true);
    let expected = [
      { name: "Tablet", price: 200, isAvailable: false },
      { name: "television", price: 400, isAvailable: true },
      { name: "mobile phone", price: 500, isAvailable: true },
      { name: "laptop", price: 800, isAvailable: false }    
    ];
    expect(received).toEqual(expected);
  });

  test("should return sorted inventory by non-availability ", function () {
    let productArr = [
      { name: "laptop", price: 800, isAvailable: false },
      { name: "television", price: 700, isAvailable: true },
      { name: "mobile phone", price: 500, isAvailable: true },
      { name: "Tablet", price: 200, isAvailable: false }
    ];
    let received = sharingTask.sortInventory(productArr, "isAvailable", true);
    let expected = [
      { name: "laptop", price: 800, isAvailable: false },
      { name: "Tablet", price: 200, isAvailable: false },
      { name: "television", price: 700, isAvailable: true },
      { name: "mobile phone", price: 500, isAvailable: true }
    ]
    expect(received).toStrictEqual(expected);

  });


  test("should return empty array when inventory is not an array", function () {
    let product = {
      television: { name: "television", price: 700, isAvailable: true },
      mobilePhone: { name: "mobile phone", price: 500, isAvailable: true },
      laptop: { name: "laptop", price: 800, isAvailable: false },
      tablet: { name: "Tablet", price: 200, isAvailable: false }
    };
    let received = sharingTask.sortInventory(product, "isAvailable", false);
    let expected = [];
    expect(received).toStrictEqual(expected);

  });

  test("should return empty array where inventory's key  is not a string", function () {
    let productArr = [
      { name: "television", price: 700, isAvailable: true },
      { name: "mobile phone", price: 500, isAvailable: true },
      { name: "laptop", price: 800, isAvailable: false },
      { name: "Tablet", price: 200, isAvailable: false }
    ];

    let received = sharingTask.sortInventory(productArr, 13, false);
    let expected = [];
    expect(received).toStrictEqual(expected);

  });

})