const products = [
  { name: "apple", price: 0.5, quantity: 10 },
  { name: "orange", price: 0.3, quantity: 16 },
  { name: "peach", price: 0.8, quantity: 12 },
];

function calculateTotalSales(products, taxRate) {
  const totalSales = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  const taxAmount = (totalSales * taxRate) / 100;

  const totalSalesWithTax = totalSales + taxAmount;
  return parseFloat(totalSalesWithTax.toFixed(2));
}
