const Rx = require('rxjs');
require('rxjs/add/operator/mergeMap');
const uuid = require('uuid');

const Lets = function (handler) {
  const finishBoudary = uuid();
  const queue = new Rx.Subject();
  const resultQueue = queue.mergeMap(fn => new Promise(fn), 1);
  const resultData = [];
  const out = {
    do: (fn) => {
      queue.next(fn);
      return out;
    },
    finish: () => queue.next(resolve => resolve(finishBoudary))
  };
  resultQueue.subscribe((data) => {
    if (data === finishBoudary) {
      return handler(resultData);
    }
    resultData.push(data);
  });
  return out;
}

const waitFor = (params) => (resolve) => {
  setTimeout(() => {
    resolve(`done waitFor ${JSON.stringify(params)}`);
  }, 1000);
};

async function myStory() {
  return new Promise(resolve => {
    const handler = data => resolve(data);
    Lets(handler).do(waitFor('a bus')).do(waitFor('a train')).finish();
  });
}
(async () => {
  const result = await myStory();
  console.log(result);
})();
