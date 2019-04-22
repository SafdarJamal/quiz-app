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
    <Segment attached>
      <Item.Group divided>
        <Item>
          <Item.Image src={codeImg} />
          <Item.Content>
            <Item.Header>
              <h1>Open Trivia Qestions</h1>
            </Item.Header>
            <br />
            <br />
            <Item.Meta>
              <Segment>
                Category: <b>Computers and Technology</b>
              </Segment>
              <Segment>
                No. of Questions: <b>10</b>
              </Segment>
              <Segment>
                Questions Type: <b>Multiple Choice</b>
              </Segment>
            </Item.Meta>
            <Divider />
            <Item.Extra>
              <Button primary onClick={props.startQuiz}>
                Start Quiz
                <Icon name="right chevron" />
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
  </Container>
);
