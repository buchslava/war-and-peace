function Go(configMaker) {
  const storage = {};
  const config = configMaker(storage);
  const logic = config.logic;

  let nextMethod;

  const generator = (function*() {
    nextMethod = yield null;

    while (nextMethod !== config.finishMarker) {
      nextMethod = yield logic[nextMethod];
    }

    return config.result();
  })();

  generator.next();

  const actions = method => value => {
    if (method === config.finishMarker) {
      return generator.next(config.finishMarker).value;
    } else {
      generator.next(method).value(value);
      return actions;
    }
  };

  return actions;
}

const configMaker = $st => ({
  logic: {
    'for group': group => $st.group = group,
    'filtered by': filter => $st.filter = `AND ${filter}`,
    'on page': page => {
      $st.page = page;
      $st.pagination = `OFFSET ${$st.page} LIMIT ${$st.limit}`;
    },
    'with limit': limit => {
      $st.limit = limit;
      $st.pagination = `OFFSET ${$st.page} LIMIT ${$st.limit}`;
    }
  },
  result: () => `SELECT name, price, unit FROM products WHERE group=${$st.group}
  ${$st.filter} ${$st.pagination}`,
  finishMarker: 'done'
});
const LoadProducts = Go(configMaker);

console.log(LoadProducts('for group')('milk')('filtered by')('price > 10')('on page')(3)('with limit')(25)('done')());
