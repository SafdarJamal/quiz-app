import React, { useState } from 'react';
import { Segment, Form, Button, Input, TextArea, Header, Icon, Divider } from 'semantic-ui-react';
import { useTheme } from '../ThemeProvider';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';

const defaultQuestion = () => ({
  id: uuidv4(),
  question: '',
  options: ['', ''],
  correct_answer: '',
});

const CustomQuestionCreator = ({ onSave, onCancel }) => {
  const { theme } = useTheme();
  const [title, setTitle] = useState('Custom Quiz');
  const [questions, setQuestions] = useState([defaultQuestion()]);

  const addQuestion = () => setQuestions(prev => [...prev, defaultQuestion()]);

  const updateQuestion = (idx, patch) => {
    const next = [...questions];
    next[idx] = { ...next[idx], ...patch };
    setQuestions(next);
  };

  const addOption = idx => {
    const q = questions[idx];
    updateQuestion(idx, { options: [...q.options, ''] });
  };

  const removeOption = (qIdx, oIdx) => {
    const q = questions[qIdx];
    const opts = q.options.filter((_, i) => i !== oIdx);
    const correct = q.correct_answer === q.options[oIdx] ? '' : q.correct_answer;
    updateQuestion(qIdx, { options: opts, correct_answer: correct });
  };

  const save = () => {
    // validation
    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      if (!q.question.trim()) {
        Swal.fire({
          icon: 'warning',
          title: `Question ${i + 1} is empty`,
          text: 'Please fill in the question text',
          confirmButtonText: 'OK',
        });
        return;
      }
      if (!q.correct_answer) {
        Swal.fire({
          icon: 'warning',
          title: `Question ${i + 1} missing correct answer`,
          text: 'Please mark the correct answer for this question',
          confirmButtonText: 'OK',
        });
        return;
      }
      if (!Array.isArray(q.options) || q.options.length < 2) {
        Swal.fire({
          icon: 'warning',
          title: `Question ${i + 1} needs at least 2 options`,
          text: 'Please add more options to this question',
          confirmButtonText: 'OK',
        });
        return;
      }
    }

    const normalized = questions.map(q => ({
      question: q.question,
      correct_answer: q.correct_answer,
      options: q.options,
      type: 'multiple',
    }));

    if (onSave) onSave(normalized);
  };

  return (
    <Segment>
      <Header as="h3" inverted={theme === 'dark'}><Icon name="pencil" /> Create Questions</Header>
      <Form>
        <Form.Field>
          <label>Quiz Title</label>
          <Input value={title} onChange={(e, { value }) => setTitle(value)} />
        </Form.Field>

        {questions.map((q, qi) => (
          <Segment key={q.id}>
            <Form.Field>
              <label>Question #{qi + 1}</label>
              <TextArea value={q.question} onChange={(e, { value }) => updateQuestion(qi, { question: value })} />
            </Form.Field>

            <Divider />

            <Form.Field>
              <label>Options</label>
              {q.options.map((opt, oi) => (
                <div key={oi} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                  <Input
                    value={opt}
                    onChange={(e, { value }) => {
                      const opts = q.options.map((o, i) => (i === oi ? value : o));
                      updateQuestion(qi, { options: opts });
                    }}
                    style={{ flex: 1 }}
                  />
                  <Button
                    onClick={() => updateQuestion(qi, { correct_answer: q.options[oi] })}
                    color={q.correct_answer === q.options[oi] ? 'green' : 'grey'}
                    style={{
                      fontWeight: q.correct_answer === q.options[oi] ? 'bold' : 'normal',
                    }}
                  >
                    {q.correct_answer === q.options[oi] ? '✓ Correct' : 'Mark'}
                  </Button>
                  <Button negative onClick={() => removeOption(qi, oi)} disabled={q.options.length <= 2}>
                    Remove
                  </Button>
                </div>
              ))}
              <Button size="small" onClick={() => addOption(qi)}>Add option</Button>
            </Form.Field>

          </Segment>
        ))}

        <Button primary onClick={addQuestion}>Add Question</Button>
        <Button color="green" onClick={save} style={{ marginLeft: 8 }}>Save & Start</Button>
        <Button basic onClick={onCancel} style={{ marginLeft: 8 }}>Cancel</Button>
      </Form>
    </Segment>
  );
};

export default CustomQuestionCreator;
