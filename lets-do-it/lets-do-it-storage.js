const Rx = require('rxjs');
require('rxjs/add/operator/mergeMap');
const uuid = require('uuid');
const { waitFor } = require('./addons/generic-wait-for');

function Lets() {
  const finishBoudary = uuid();
  const queue = new Rx.Subject();
  const storage = {};
  const resultQueue = queue.mergeMap(fn => new Promise(fn(storage)), 1);
  const out = {
    do: (fn) => {
      queue.next(fn); return out;
    },
    atTheEnd: (handler) => queue.next(() => resolve => {
      resolve({ finishBoudary, handler });
      resultQueue.unsubscribe();
    })
  };
  resultQueue.subscribe((data) => {
    if (data && data.finishBoudary === finishBoudary) {
      return data.handler(storage);
    }
  });
  return out;
}

async function myStory() {
  return new Promise(resolve => {
    const thatsIt = data => resolve(data);
    Lets().do(waitFor('a bus')).do(waitFor('a train')).atTheEnd(thatsIt);
  });
}
(async () => {
  const result = await myStory();
  console.log(result);
})();
