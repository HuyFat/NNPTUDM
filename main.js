// Câu 1:
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// CÂU 2:
const products = [
  new Product(1, "Laptop Dell", 1200, 5, "Electronics", true),
  new Product(2, "Chuột Logitech", 25, 20, "Accessories", true),
  new Product(3, "Bàn phím cơ", 80, 0, "Accessories", false),
  new Product(4, "Tai nghe Sony", 150, 10, "Electronics", true),
  new Product(5, "USB 64GB", 15, 30, "Accessories", true)
];

// CÂU 3:
const nameAndPrice = products.map(p => ({
  name: p.name,
  price: p.price
}));
console.log("Câu 3:", nameAndPrice);

// CÂU 4: 
const inStockProducts = products.filter(p => p.quantity > 0);
console.log("Câu 4:", inStockProducts);

// CÂU 5:
const hasPriceOver30 = products.some(p => p.price > 30);
console.log("Câu 5:", hasPriceOver30);

// CÂU 6: 
const accessoriesAvailable = products
  .filter(p => p.category === "Accessories")
  .every(p => p.isAvailable === true);
console.log("Câu 6:", accessoriesAvailable);

// CÂU 7: 
const totalInventoryValue = products.reduce(
  (total, p) => total + p.price * p.quantity,
  0
);
console.log("Câu 7: Tổng giá trị kho =", totalInventoryValue);

// CÂU 8: 
console.log("Câu 8:");
for (const product of products) {
  console.log(
    `Tên: ${product.name} - Danh mục: ${product.category} - Trạng thái: ${
      product.isAvailable ? "Đang bán" : "Ngừng bán"
    }`
  );
}

// CÂU 9: 
console.log("Câu 9:");
for (const key in products[0]) {
  console.log(`${key}: ${products[0][key]}`);
}

// CÂU 10: 
const sellingAndInStockNames = products
  .filter(p => p.isAvailable && p.quantity > 0)
  .map(p => p.name);
console.log("Câu 10:", sellingAndInStockNames);
