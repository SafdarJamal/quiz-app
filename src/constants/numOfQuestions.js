const NUM_OF_QUESTIONS = [];

for (let i = 1; i <= 50; i++) {
  const object = { key: i, text: `${i}`, value: i };
  NUM_OF_QUESTIONS.push(object);
}

export default NUM_OF_QUESTIONS;
