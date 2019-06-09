const COUNTDOWN_TIME = [];

for (let i = 1; i <= 60; i++) {
  const object = { key: i, text: `${i}`, value: i };
  COUNTDOWN_TIME.push(object);
}

export default COUNTDOWN_TIME;
