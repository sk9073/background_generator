const prices = [20, 10, 30, 25, 15, 40, 80, 5];

const SalePrice = prices.map((price) =>{
    return price/2;
});
console.log(SalePrice);

const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
  ];

  const saleProducts = products.map(product => {
    if(product.price > 30){
      return {name: product.name, price: product.price / 2}
    } else {
      return product;
    }
  });

  console.log(products, saleProducts);
