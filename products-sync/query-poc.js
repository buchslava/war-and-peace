const getProductsQuery = (productsGroup, filter, pageNum, limit) =>
  `SELECT name, price, unit FROM products WHERE group='${productsGroup}' ${filter} OFFSET ${pageNum} LIMIT ${limit}`;

console.log(getProductsQuery('hardware', 'AND price<1000', 1, 25));
