const _ = require('lodash');

const _shouldNotBeEmpty = (key, value, prefix = '') => {
  if (!value && value !== 0) {
    throw new Error(`"${key}" should NOT be empty`);
  }
  return [key, `${prefix}${value}`];
};
const _shouldBeNumber = (key, value) => {
  if (!_.isNumber(value)) {
    throw new Error(`"${key}" should be a number`);
  }
  return [key, value];
};

function getProductsQuery() {
  let state = `SELECT name, price, unit FROM products WHERE group='#group#' #filter# #pagination#`;
  const _set = (key, value) => state = state.replace(`#${key}#`, value);
  const immediate = () => { _set('pagination', ''); _set('filter', ''); return state; };

  return {
    forGroup: (group) => {
      _set(..._shouldNotBeEmpty('group', group));
      return ({
        filteredBy: (filter) => {
          _set(..._shouldNotBeEmpty('filter', filter, 'AND '));
          return ({
            onPage: (pageNum) => ({
              withLimit: (limit) => {
                _shouldBeNumber('pageNum', pageNum); _shouldBeNumber('limit', limit);
                _set('pagination', `OFFSET ${pageNum} LIMIT ${limit}`);
                return state;
              }
            }), immediate
          });
        }, immediate
      });
    }
  }
}

console.log(getProductsQuery().forGroup('milk').filteredBy('price>10').onPage(5).withLimit(25));
console.log(getProductsQuery().forGroup('milk').filteredBy('price>10').immediate());
console.log(getProductsQuery().forGroup('milk').immediate());

try {
  console.log(getProductsQuery().forGroup('').immediate());
} catch (e) {
  console.log(e.message);
}

try {
  console.log(getProductsQuery().forGroup('milk').filteredBy('').immediate());
} catch (e) {
  console.log(e.message);
}

try {
  console.log(getProductsQuery().forGroup('milk').filteredBy('AND price>10').onPage().withLimit(25));
} catch (e) {
  console.log(e.message);
}
