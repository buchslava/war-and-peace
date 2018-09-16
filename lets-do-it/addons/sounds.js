const sound = (value) => storage => resolve => {
  if (!storage.sounds) {
    storage.sounds = [];
  }

  setTimeout(() => {
    storage.sounds.push(value);
    resolve();
  }, 0);
};

module.exports.sound = sound;
module.exports.say = sound;
