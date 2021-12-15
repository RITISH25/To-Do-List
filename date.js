//jshint esversion:6

module.exports.getDate = () => {
  let today = new Date();
  let options = {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  };
  return today.toLocaleDateString("en-US", options);
}

module.exports.getDay = () => {
  let today = new Date();
  let options = {
    weekday: 'long'
  };
  return today.toLocaleDateString("en-US", options);
}
