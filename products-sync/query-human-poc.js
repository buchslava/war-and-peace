function getProductsQueryNew() {
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

console.log(getProductsQueryNew().forGroup('milk').filteredBy('price>10').onPage(5).withLimit(25));
console.log(getProductsQueryNew().forGroup('milk').filteredBy('price>10').immediate());
console.log(getProductsQueryNew().forGroup('milk').immediate());
