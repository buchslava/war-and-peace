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

function scatter(itObj, itSubj, matchFun, actionFun) {
  while (itObj.length > 0) {
    for (const subj of itSubj) {
      for (let i = 0; i < itObj.length; i++) {
        const obj = itObj[i];
        if (matchFun(subj)) {
          actionFun(subj, obj);
          itObj.splice(i, 1);
        } else {
          continue;
        }
      }
    }    
  }
}

function spectaclePreparation(ratesByServices, staff, actors) {
  return Math.max(...howMachTimeWasSpent(forActivitiesList()).values());

  function actualOnly(worker, currentSpendTimeState) {
    for (const currentWorker of staff) {
      if (currentWorker !== worker && currentSpendTimeState.get(currentWorker) < currentSpendTimeState.get(worker)) {
        return false;
      }
    }
    return true;
  }
  
  function forActivitiesList() {
    const services = [...ratesByServices.keys()];
    const activitiesArray = getPermutations([actors, services]);

    return activitiesArray.map(activity => ({
      actor: activity[0], work: activity[1], rate: ratesByServices.get(activity[1])
    })).sort((a, b) => a.rate < b.rate ? 1 : b.rate < a.rate ? -1 : 0);
  }

  function howMachTimeWasSpent(activities) {
    const spendTime = new Map(staff.map(s => [s, 0]));

    scatter(activities, staff, 
      (subj) => actualOnly(subj, spendTime), 
      (subj, obj) => {
        spendTime.set(subj, spendTime.get(subj) + obj.rate);
      });

    return spendTime;
  }
}

const ratesByServices = new Map([['makeup', 30], ['hair style', 10]]);
const staff = ['first makuper', 'second makeuper'];
const actors = ['first actor', 'second actor', 'third actor'];

console.log(spectaclePreparation(ratesByServices, staff, actors));
