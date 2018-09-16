module.exports.waitFor = (params) => storage => resolve => {
  setTimeout(() => {
    if (!storage.waitFor) {
      storage.waitFor = [];
    }

    storage.waitFor.push(`done waitFor ${JSON.stringify(params)}; prev storage: ${JSON.stringify(storage)}`);
    resolve();
  }, 1000);
};
