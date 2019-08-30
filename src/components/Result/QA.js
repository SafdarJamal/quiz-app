import React from 'react';
import { Table } from 'semantic-ui-react';

const QA = ({ questionsAndAnswers }) => (
  <Table celled striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>No.</Table.HeaderCell>
        <Table.HeaderCell>Questions</Table.HeaderCell>
        <Table.HeaderCell>Your Answers</Table.HeaderCell>
        <Table.HeaderCell>Correct Answers</Table.HeaderCell>
        <Table.HeaderCell>Points</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {questionsAndAnswers.map((item, i) => (
        <Table.Row key={i + 1}>
          <Table.Cell>{i + 1}</Table.Cell>
          <Table.Cell>{item.question}</Table.Cell>
          <Table.Cell>{item.user_answer}</Table.Cell>
          <Table.Cell>{item.correct_answer}</Table.Cell>
          <Table.Cell>{item.point}</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);

export default QA;
