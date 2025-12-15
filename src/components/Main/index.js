import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Segment,
  Item,
  Dropdown,
  Divider,
  Button,
  Message,
  Modal,
  Icon,
} from 'semantic-ui-react';

import mindImg from '../../images/mind.svg';

import {
  CATEGORIES,
  NUM_OF_QUESTIONS,
  DIFFICULTY,
  QUESTIONS_TYPE,
  COUNTDOWN_TIME,
} from '../../constants';
import { shuffle } from '../../utils';

import Offline from '../Offline';
import CustomQuestionCreator from '../CustomQuestionCreator';

const Main = ({ startQuiz }) => {
  const [category, setCategory] = useState('0');
  const [numOfQuestions, setNumOfQuestions] = useState(5);
  const [difficulty, setDifficulty] = useState('easy');
  const [questionsType, setQuestionsType] = useState('0');
  const [countdownTime, setCountdownTime] = useState({
    hours: 0,
    minutes: 2,
    seconds: 0,
  });
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [offline, setOffline] = useState(false);
  const [fileError, setFileError] = useState(null);
  const [showJsonFormat, setShowJsonFormat] = useState(false);
  const fileInputRef = useRef();
  const [showCreator, setShowCreator] = useState(false);

  const handleTimeChange = (e, { name, value }) => {
    setCountdownTime({ ...countdownTime, [name]: value });
  };

  const allFieldsSelected = Boolean(category && numOfQuestions && difficulty && questionsType);

  const fetchData = () => {
    setProcessing(true);

    if (error) setError(null);

    const baseApi = `https://opentdb.com/api.php?amount=${numOfQuestions}&category=${category}&difficulty=${difficulty}`;
    const API = questionsType && questionsType !== '0' ? `${baseApi}&type=${questionsType}` : baseApi;

    fetch(API)
      .then(response => response.json())
      .then(data =>
        setTimeout(() => {
          const { response_code, results } = data;

          if (response_code === 1) {
            const message = (
              <p>
                The API doesn't have enough questions for your query. (Ex.
                Asking for 50 Questions in a Category that only has 20.)
                <br />
                {showCreator && (
                  <div style={{ marginTop: 16 }}>
                    <CustomQuestionCreator
                      onSave={data => {
                        const totalSeconds = (countdownTime.hours * 3600) + (countdownTime.minutes * 60) + (countdownTime.seconds * 1);
                        startQuiz(data, totalSeconds);
                      }}
                      onCancel={() => setShowCreator(false)}
                    />
                  </div>
                )}
                <br />
                Please change the <strong>No. of Questions</strong>,{' '}
                <strong>Difficulty Level</strong>, or{' '}
                <strong>Type of Questions</strong>.
              </p>
            );

            setProcessing(false);
            setError({ message });

            return;
          }

          // normalize options for each result
          results.forEach(element => {
            element.options = shuffle([
              element.correct_answer,
              ...(element.incorrect_answers || []),
            ]);
          });

          setProcessing(false);
          startQuiz(
            results,
            (countdownTime.hours * 3600) + (countdownTime.minutes * 60) + (countdownTime.seconds * 1)
          );
        }, 1000)
      )
      .catch(err =>
        setTimeout(() => {
          if (!navigator.onLine) {
            setOffline(true);
          } else {
            setProcessing(false);
            setError(err);
          }
        }, 1000)
      );
  };

  const handleFileSelect = e => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    setProcessing(true);
    setFileError(null);

    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const parsed = JSON.parse(ev.target.result);

        // allow two shapes: array of questions or { questions: [...] }
        const dataArray = Array.isArray(parsed)
          ? parsed
          : parsed && Array.isArray(parsed.questions)
          ? parsed.questions
          : null;

        if (!dataArray) throw new Error('Invalid JSON shape. Expected an array of questions or { questions: [...] }');

        // normalize items to have options array
        const normalized = dataArray.map(item => {
          // if options not present, try to build from incorrect_answers
          if (!item.options || !Array.isArray(item.options)) {
            if (Array.isArray(item.incorrect_answers)) {
              item.options = shuffle([item.correct_answer, ...item.incorrect_answers]);
            } else if (Array.isArray(item.answers)) {
              // fallback if property named answers
              item.options = item.answers;
            } else {
              item.options = [item.correct_answer];
            }
          }
          return item;
        });

        // basic validation: each item must have question and correct_answer
        const invalid = normalized.find(it => !it.question || !it.correct_answer || !Array.isArray(it.options) || it.options.length < 2);
        if (invalid) throw new Error('Each question must have `question`, `correct_answer` and at least two `options`.');

        const totalSeconds = (countdownTime.hours * 3600) + (countdownTime.minutes * 60) + (countdownTime.seconds * 1);

        setProcessing(false);
        startQuiz(normalized, totalSeconds);
      } catch (err) {
        setProcessing(false);
        setFileError(err.message || 'Failed to parse JSON');
      }
    };
    reader.onerror = () => {
      setProcessing(false);
      setFileError('Failed to read file');
    };
    reader.readAsText(file);
    // reset input
    e.target.value = null;
  };

  const triggerFileUpload = () => {
    if (fileInputRef && fileInputRef.current) fileInputRef.current.click();
  };

  if (offline) return <Offline />;

  return (
    <Container>
      <Segment>
        <Item.Group divided>
          <Item>
            <Item.Image src={mindImg} />
            <Item.Content>
              <Item.Header>
                <h1>The Ultimate Trivia Quiz</h1>
              </Item.Header>
              {error && (
                <Message error onDismiss={() => setError(null)}>
                  <Message.Header>Error!</Message.Header>
                  {error.message}
                </Message>
              )}
              <Divider />
              <Item.Meta>
                <p>In which category do you want to play the quiz?</p>
                <Dropdown
                  fluid
                  selection
                  name="category"
                  placeholder="Select Quiz Category"
                  header="Select Quiz Category"
                  options={CATEGORIES}
                  value={category}
                  onChange={(e, { value }) => setCategory(value)}
                  disabled={processing}
                />
                <br />
                <p>How many questions do you want in your quiz?</p>
                <Dropdown
                  fluid
                  selection
                  name="numOfQ"
                  placeholder="Select No. of Questions"
                  header="Select No. of Questions"
                  options={NUM_OF_QUESTIONS}
                  value={numOfQuestions}
                  onChange={(e, { value }) => setNumOfQuestions(value)}
                  disabled={processing}
                />
                <br />
                <p>How difficult do you want your quiz to be?</p>
                <Dropdown
                  fluid
                  selection
                  name="difficulty"
                  placeholder="Select Difficulty Level"
                  header="Select Difficulty Level"
                  options={DIFFICULTY}
                  value={difficulty}
                  onChange={(e, { value }) => setDifficulty(value)}
                  disabled={processing}
                />
                <br />
                <p>Which type of questions do you want in your quiz?</p>
                <Dropdown
                  fluid
                  selection
                  name="type"
                  placeholder="Select Questions Type"
                  header="Select Questions Type"
                  options={QUESTIONS_TYPE}
                  value={questionsType}
                  onChange={(e, { value }) => setQuestionsType(value)}
                  disabled={processing}
                />
                <br />
                <p>Please select the countdown time for your quiz.</p>
                <Dropdown
                  search
                  selection
                  name="hours"
                  placeholder="Select Hours"
                  header="Select Hours"
                  options={COUNTDOWN_TIME.hours}
                  value={countdownTime.hours}
                  onChange={handleTimeChange}
                  disabled={processing}
                />
                <Dropdown
                  search
                  selection
                  name="minutes"
                  placeholder="Select Minutes"
                  header="Select Minutes"
                  options={COUNTDOWN_TIME.minutes}
                  value={countdownTime.minutes}
                  onChange={handleTimeChange}
                  disabled={processing}
                />
                <Dropdown
                  search
                  selection
                  name="seconds"
                  placeholder="Select Seconds"
                  header="Select Seconds"
                  options={COUNTDOWN_TIME.seconds}
                  value={countdownTime.seconds}
                  onChange={handleTimeChange}
                  disabled={processing}
                />
              </Item.Meta>
              <Divider />
              <Item.Extra>
                <Button
                  primary
                  size="big"
                  icon="play"
                  labelPosition="left"
                  content={processing ? 'Processing...' : 'Play Now'}
                  onClick={fetchData}
                  disabled={!allFieldsSelected || processing}
                />
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="application/json"
                  onChange={handleFileSelect}
                  style={{ display: 'none' }}
                />
                <Button
                  size="big"
                  icon="upload"
                  labelPosition="left"
                  content="Upload JSON"
                  onClick={() => setShowJsonFormat(true)}
                  disabled={processing}
                />
                <Button
                  size="big"
                  icon={showCreator ? 'close' : 'edit'}
                  labelPosition="left"
                  content={showCreator ? 'Close Creator' : 'Create Questions'}
                  onClick={() => setShowCreator(prev => !prev)}
                  disabled={processing}
                />
                {fileError && (
                  <Message error onDismiss={() => setFileError(null)}>
                    <Message.Header>Upload Error</Message.Header>
                    {fileError}
                  </Message>
                )}
                
                {/* JSON Format Modal */}
                <Modal
                  open={showJsonFormat}
                  onClose={() => setShowJsonFormat(false)}
                  size="small"
                  centered={false}
                >
                  <Modal.Header>Upload JSON Format</Modal.Header>
                  <Modal.Content scrolling>
                    <p><strong>Your JSON file can be structured in two ways:</strong></p>
                    
                    <h4>Option 1: Array of Questions</h4>
                    <pre style={{ 
                      backgroundColor: 'var(--surface-color)', 
                      padding: '12px', 
                      borderRadius: '4px',
                      overflow: 'auto',
                      maxHeight: '200px',
                      color: 'var(--text-color)',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}>
{`[
  {
    "question": "What is the capital of France?",
    "correct_answer": "Paris",
    "incorrect_answers": ["London", "Berlin", "Madrid"]
  },
  {
    "question": "What is 2 + 2?",
    "correct_answer": "4",
    "incorrect_answers": ["3", "5", "6"]
  }
]`}
                    </pre>

                    <h4>Option 2: Object with questions property</h4>
                    <pre style={{ 
                      backgroundColor: 'var(--surface-color)', 
                      padding: '12px', 
                      borderRadius: '4px',
                      overflow: 'auto',
                      maxHeight: '200px',
                      color: 'var(--text-color)',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}>
{`{
  "questions": [
    {
      "question": "What is the capital of France?",
      "correct_answer": "Paris",
      "incorrect_answers": ["London", "Berlin", "Madrid"]
    }
  ]
}
`}
                    </pre>

                    <p><strong>Required fields:</strong></p>
                    <ul>
                      <li><code>question</code> - The question text (string)</li>
                      <li><code>correct_answer</code> - The correct answer (string)</li>
                      <li><code>incorrect_answers</code> - Array of wrong answers (array), OR use <code>options</code> with all answer options</li>
                    </ul>

                    <p><strong>Optional fields:</strong></p>
                    <ul>
                      <li><code>category</code> - Question category (string)</li>
                      <li><code>difficulty</code> - easy/medium/hard (string)</li>
                      <li><code>type</code> - multiple/boolean (string)</li>
                    </ul>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button onClick={() => triggerFileUpload()}>
                      <Icon name="upload" /> Upload File
                    </Button>
                    <Button onClick={() => setShowJsonFormat(false)}>
                      Close
                    </Button>
                  </Modal.Actions>
                </Modal>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <br />

      {showCreator && (
        <Segment>
          <CustomQuestionCreator
            onSave={data => {
              const totalSeconds = countdownTime.hours * 3600 + countdownTime.minutes * 60 + countdownTime.seconds;
              startQuiz(data, totalSeconds);
              setShowCreator(false);
            }}
            onCancel={() => setShowCreator(false)}
          />
        </Segment>
      )}
    </Container>
  );
};

Main.propTypes = {
  startQuiz: PropTypes.func.isRequired,
};

export default Main;
