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

function spectaclePreparation() {
  const me = spectaclePreparation;

  return Math.max(...howMachTimeWasSpent(forActivitiesList(), actualOnly).values());

  function actualOnly(worker, currentSpendTimeState) {
    for (const currentWorker of me.staff) {
      if (currentWorker !== worker && currentSpendTimeState.get(currentWorker) < currentSpendTimeState.get(worker)) {
        return false;
      }
    }
    return true;
  }
  
  function forActivitiesList() {
    const services = [...me.ratesByServices.keys()];
    const activitiesArray = getPermutations([me.actors, services]);

    return activitiesArray.map(activity => ({
      actor: activity[0], work: activity[1], rate: me.ratesByServices.get(activity[1])
    })).sort((a, b) => a.rate < b.rate ? 1 : b.rate < a.rate ? -1 : 0);
  }

  function howMachTimeWasSpent(activities, match) {
    const spendTime = new Map(me.staff.map(s => [s, 0]));

    while (activities.length > 0) {
      for (const worker of me.staff) {
        for (let i = 0; i < activities.length; i++) {
          const activity = activities[i];

          if (match(worker, spendTime)) {
            spendTime.set(worker, spendTime.get(worker) + activity.rate);
            // console.log(worker, activity);
            activities.splice(i, 1);
          } else {
            continue;
          }
        }
      }    
    }

    return spendTime;
  }
}

spectaclePreparation.ratesByServices = new Map([['makeup', 30], ['hair style', 10]]);
spectaclePreparation.staff = ['first makuper', 'second makeuper'];
spectaclePreparation.actors = ['first actor', 'second actor', 'third actor'];

console.log(spectaclePreparation());
