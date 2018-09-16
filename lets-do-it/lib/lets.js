const Rx = require('rxjs');
require('rxjs/add/operator/mergeMap');
const uuid = require('uuid');

module.exports.Lets = function (dslFunctions = []) {
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
  for (const alternativeName of dslFunctions) {
    out[alternativeName] = (fn) => {
      queue.next(fn); return out;
    };
  }
  resultQueue.subscribe((data) => {
    if (data && data.finishBoudary === finishBoudary) {
      return data.handler(storage);
    }
  });
  return out;
}

module.exports.MultiResolver = class {
  constructor(resolve, expectedDataLength) {
    this.resolve = resolve;
    this.expectedDataLength = expectedDataLength;
    this.data = [];
  }

  finalizeStep(data) {
    this.data.push(data);

    if (this.data.length === this.expectedDataLength) {
      this.resolve(this.data);
    }
  }
}
