import React from 'react';
import { Segment, Table } from 'semantic-ui-react';

const QA = ({ QA }) => (
  <Segment>
    <Table celled>
      <Table.Header>
        {/* <Table.Row>
          <Table.HeaderCell colSpan="4">
            <h4>
              (Q. 1) If you could fold a piece of paper in half 50 times, its'
              thickness will be 3/4th the distance from the Earth to the Sun.
            </h4>
          </Table.HeaderCell>
        </Table.Row> */}
        <Table.Row>
          <Table.HeaderCell>Questions No.</Table.HeaderCell>
          <Table.HeaderCell>Your Answers</Table.HeaderCell>
          <Table.HeaderCell>Correct Answers</Table.HeaderCell>
          <Table.HeaderCell>Points</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {QA.map((item, i) => (
          <Table.Row key={i + 1}>
            <Table.Cell>{i + 1}</Table.Cell>
            <Table.Cell>{item.user_answer}</Table.Cell>
            <Table.Cell>{item.correct_answer}</Table.Cell>
            <Table.Cell>{item.point}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </Segment>
);

export default QA;
