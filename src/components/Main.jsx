import React from 'react';
import {
  Container,
  Segment,
  Item,
  Divider,
  Button,
  Icon
} from 'semantic-ui-react';
import codeImg from '../assets/code.png';

export default props => (
  <Container>
    <Segment raised>
      <Item.Group divided>
        <Item>
          <Item.Image src={codeImg} />
          <Item.Content>
            <Item.Header>
              <h1>Open Trivia Questions</h1>
            </Item.Header>
            <br />
            <br />
            <Divider />
            <Item.Meta>
              <Segment size="large">
                Category: <b>Computers and Technology</b>
              </Segment>
              <Segment size="large">
                No. of Questions: <b>10</b>
              </Segment>
              <Segment size="large">
                Passing Score: <b>60 out of 100</b>
              </Segment>
              <Segment size="large">
                Questions Type: <b>Multiple Choice</b>
              </Segment>
            </Item.Meta>
            <Divider />
            <Item.Extra>
              <Button primary size="big" onClick={props.startQuiz}>
                Start Quiz
                <Icon name="right play" />
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
  </Container>
);
