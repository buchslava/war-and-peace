const Subject = require('rxjs').Subject;
require('rxjs/add/operator/mergeMap');

const doSomething = thing => {
  return new Promise(resolve => {
    console.log(`start ${thing}`);
    setTimeout(() => {
      resolve(`finish ${thing}`);
    }, 5000);
  });
};

class myQueue {
  constructor() {
    this.queue = new Subject();
    this.results = this.queue.mergeMap(what => doSomething(what), 1);
    this.results.subscribe(console.log);
  }

  addToQueue(url) {
    this.queue.next(url);
  }
}

const instance = new myQueue();

instance.addToQueue('wake up');
instance.addToQueue('lunch');
instance.addToQueue('work');
instance.addToQueue('dinner');
instance.addToQueue('work');
instance.addToQueue('sleep');