const { Lets } = require('./lib/lets');
const { sound, say } = require('./addons/sounds');

async function myStory() {
  return new Promise(resolve => {
    const dsl = ['make', 'and'];
    const thatsIt = data => resolve(data);

    Lets(dsl).make(sound('bark')).and(say('meo')).and(say('wow')).atTheEnd(thatsIt);
  });
}

(async () => {
  const result = await myStory();
  console.log(JSON.stringify(result, null, 2));
})();
