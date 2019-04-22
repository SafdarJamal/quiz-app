import React, { Component } from 'react';
import {
  Container,
  Segment,
  Item,
  Divider,
  Button,
  Icon,
  Message
} from 'semantic-ui-react';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { quizData } = this.props;
    return (
      <Container>
        <Segment attached>
          <Item.Group divided>
            <Item>
              <Item.Content>
                <Item.Header>
                  <h1>Question No.1 of 10</h1>
                </Item.Header>
                <br />
                <br />
                <br />
                <Item.Meta>
                  <Message size="huge" floating>
                    <b>{`Q. ${quizData[0].question}`}</b>
                  </Message>
                  <br />
                  <Item.Description>
                    <h4>Please choose one of the following answers:</h4>
                  </Item.Description>
                  <Divider />
                  <Segment size="large">
                    {quizData[0].incorrect_answers[1]}
                  </Segment>
                  <Segment size="large">{quizData[0].correct_answer}</Segment>
                  <Segment size="large">
                    {quizData[0].incorrect_answers[2]}
                  </Segment>
                  <Segment size="large">
                    {quizData[0].incorrect_answers[0]}
                  </Segment>
                </Item.Meta>
                <Divider />
                <Item.Extra>
                  <Button primary floated="right">
                    Next
                    <Icon name="right chevron" />
                  </Button>
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Container>
    );
  }
}

export default Quiz;
