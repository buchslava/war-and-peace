const _ = require('lodash');

function getProductsListQuery(productsGroup, filter, pageNum, limit) {
  let sql = `SELECT name, price, unit FROM products WHERE group='${productsGroup}' #filter# #pagination#`;

  if (!productsGroup) {
    throw new Error(`productsGroup should be empty`);
  }

  if (filter) {
    sql = sql.replace('#filter#', `AND ${filter}`);
  } else {
    sql = sql.replace('#filter#', '');
  }

  if ((!pageNum && page !== 0) && !limit) {
    sql = sql.replace('#pagination#', '');
  } else if (_.isNumber(pageNum) && _.isNumber(limit)) {
    sql = sql.replace('#pagination#', `OFFSET ${pageNum} LIMIT ${limit}`);
  } else {
    throw new Error('Bad pagination parameters!');
  }

  return sql;
}

console.log(getProductsListQuery('milk', 'price>10', 5, 25));
console.log(getProductsListQuery('milk', 'price>10'));
console.log(getProductsListQuery('milk'));
