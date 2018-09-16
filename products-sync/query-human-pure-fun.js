function productsQueryByGroup(group, filter = '', pageNum = '', limit = '') {
  return method => {
    switch (method) {
      case 'filteredBy': return newFilter => productsQueryByGroup(group, `AND ${newFilter}`);
      case 'onPage': return newPageNum => productsQueryByGroup(group, filter, newPageNum);
      case 'withLimit': return newLimit => productsQueryByGroup(group, filter, pageNum, newLimit);
      case 'withPagination': return (newPageNum, newLimit) => productsQueryByGroup(group, filter, newPageNum, newLimit);
      case 'getData': {
        const pageNumPart = !pageNum ? '' : `OFFSET ${pageNum}`;
        const limitPart = !limit ? '' : `LIMIT ${limit}`;

        return `SELECT name, price, unit FROM products WHERE group=${group} ${filter} ${pageNumPart} ${limitPart}`;
      }
      default: return (...args) => `unknown method "${method}"`;
    }
  };
}

console.log(productsQueryByGroup('milk')('filteredBy')('price>10')('onPage')(5)('withLimit')(25)('getData'));
console.log(productsQueryByGroup('milk')('filteredBy')('price>10')('getData'));
console.log(productsQueryByGroup('milk')('getData'));
console.log(productsQueryByGroup('milk')('filteredBy')('price>10')('withPagination')(5, 25)('getData'));
