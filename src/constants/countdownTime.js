const COUNTDOWN_TIME = {
  hours: [],
  minutes: [],
  seconds: [],
};

for (let i = 0; i < 100; i++) {
  COUNTDOWN_TIME.hours.push({ key: i, text: i, value: i * 60 * 60 });
}

for (let i = 0; i < 60; i++) {
  COUNTDOWN_TIME.minutes.push({ key: i, text: i, value: i * 60 });
}

for (let i = 0; i < 60; i++) {
  COUNTDOWN_TIME.seconds.push({ key: i, text: i, value: i });
}

export default COUNTDOWN_TIME;
