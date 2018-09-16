const { Lets, MultiResolver } = require('./lib/lets');
const { query, productsBy } = require('./addons/products');
const { sound, say } = require('./addons/sounds');
const { waitFor } = require('./addons/generic-wait-for');

async function myStory() {
  return new Promise(resolve => {
    const FirstOfAll = Lets(['andAfterThat', 'load', 'alsoLoad']);
    const Secondly = Lets(['make', 'and']);
    const resolver = new MultiResolver(resolve, 2);
    const collectAndReturnDataFromAllSentencies = (data) => resolver.finalizeStep(data);

    FirstOfAll
      .load(productsBy(query().forGroup('milk').filteredBy('price>10').onPage(5).withLimit(25)))
      .alsoLoad(productsBy(query().forGroup('cars').immediate()))
      .andAfterThat(waitFor('Bill'))
      .atTheEnd(collectAndReturnDataFromAllSentencies);

      Secondly.make(sound('bark')).and(say('meo')).and(say('wow'))
      .atTheEnd(collectAndReturnDataFromAllSentencies);
  });
}

(async () => {
  const result = await myStory();
  console.log(JSON.stringify(result, null, 2));
})();
