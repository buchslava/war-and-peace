function getPermutations(choices) {
  const result = [];

  function permutations(choices, callback, prefix) {
    if (!choices.length) {
      return callback(prefix);
    }
    for (let c = 0; c < choices[0].length; c++) {
      permutations(choices.slice(1), callback, (prefix || []).concat(choices[0][c]));
    }
  }

  permutations(choices, record => result.push(record));

  return result;
}

function isJobActualFor(worker) {
  for (const currentWorker of staff) {
    if (currentWorker !== worker && spendTime.get(currentWorker) < spendTime.get(worker)) {
      return false;
    }
  }
  return true;
}

const rates = new Map([['makeup', 30], ['hair style', 10]]);
const services = [...rates.keys()];
const staff = ['first makuper', 'second makeuper'];
const actors = ['first actor', 'second actor', 'third actor'];
const activitiesArray = getPermutations([actors, services]);
const activities = activitiesArray.map(activity => ({
  actor: activity[0], work: activity[1], rate: rates.get(activity[1])
})).sort((a, b) => a.rate < b.rate ? 1 : b.rate < a.rate ? -1 : 0);
const spendTime = new Map(staff.map(s => [s, 0]));

while (activities.length > 0) {
  for (const worker of staff) {
    for (let i = 0; i < activities.length; i++) {
      const activity = activities[i];
      if (isJobActualFor(worker)) {
        spendTime.set(worker, spendTime.get(worker) + activity.rate);
        console.log(worker, activity);
        activities.splice(i, 1);
      } else {
        continue;
      }
    }
  }    
}

console.log(Math.max(...spendTime.values()));
