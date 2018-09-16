function productsQuery() {
  let state = `SELECT name, price, unit FROM products WHERE group='#group#' #filter# #pagination#`;
  const _set = (key, value) => state = state.replace(`#${key}#`, value);
  const immediate = () => { _set('pagination', ''); _set('filter', ''); return state; };

  return {
    forGroup: (group) => {
      _set('group', group);
      return ({
        filteredBy: (filter) => {
          _set('filter', `AND ${filter}`);
          return ({
            onPage: (pageNum) => ({
              withLimit: (limit) => {
                _set('pagination', `OFFSET ${pageNum} LIMIT ${limit}`);
                return state;
              }
            }),
            immediate
          });
        },
        immediate
      });
    }
  }
}

console.log(productsQuery().forGroup('milk').filteredBy('price>10').onPage(5).withLimit(25));
console.log(productsQuery().forGroup('milk').filteredBy('price>10').immediate());
console.log(productsQuery().forGroup('milk').immediate());

console.log('getProductsQueryNew', productsQuery());
console.log('--------------------------------------');
console.log('forGroup', productsQuery().forGroup('milk'));
console.log('--------------------------------------');
console.log('filteredBy', productsQuery().forGroup('milk').filteredBy('price>10'));
console.log('--------------------------------------');
console.log('onPage', productsQuery().forGroup('milk').filteredBy('price>10').onPage(5));
