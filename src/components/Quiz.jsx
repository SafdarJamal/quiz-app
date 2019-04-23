import React, { Component } from 'react';
import {
  Container,
  Segment,
  Item,
  Divider,
  Button,
  Icon,
  Message,
  Menu
} from 'semantic-ui-react';
import Loader from './Loader.jsx';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizData: props.quizData,
      isLoading: true
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }
  handleItemClick(e, { name }) {
    this.setState({ userSlectedAns: name });
  }

  componentDidMount() {
    const min = Math.ceil(0);
    const max = Math.floor(3);
    const outPut = Math.floor(Math.random() * (max - min + 1)) + min;

    const { quizData } = this.state;
    const options = [...quizData[0].incorrect_answers];
    options.splice(outPut, 0, quizData[0].correct_answer);

    setTimeout(() => {
      this.setState({ isLoading: false, options, outPut });
    }, 1000);
  }
  render() {
    // const { quizData } = this.props;
    const { quizData, options, outPut, userSlectedAns, isLoading } = this.state;
    console.log(userSlectedAns);
    console.log(options, outPut);
    return (
      <div>
        {isLoading && <Loader />}
        {!isLoading && (
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
                        <h3>Please choose one of the following answers:</h3>
                      </Item.Description>
                      <Divider />
                      <Menu vertical fluid size="massive">
                        <Menu.Item
                          name={quizData[0].incorrect_answers[1]}
                          active={
                            userSlectedAns === quizData[0].incorrect_answers[1]
                          }
                          onClick={this.handleItemClick}
                        >
                          <b style={{ marginRight: '8px' }}>A.</b>
                          {quizData[0].incorrect_answers[1]}
                        </Menu.Item>
                        <Menu.Item
                          name={quizData[0].correct_answer}
                          active={userSlectedAns === quizData[0].correct_answer}
                          onClick={this.handleItemClick}
                        >
                          <b style={{ marginRight: '8px' }}>B.</b>
                          {quizData[0].correct_answer}
                        </Menu.Item>
                        <Menu.Item
                          name={quizData[0].incorrect_answers[2]}
                          active={
                            userSlectedAns === quizData[0].incorrect_answers[2]
                          }
                          onClick={this.handleItemClick}
                        >
                          <b style={{ marginRight: '8px' }}>C.</b>
                          {quizData[0].incorrect_answers[2]}
                        </Menu.Item>
                        <Menu.Item
                          name={quizData[0].incorrect_answers[0]}
                          active={
                            userSlectedAns === quizData[0].incorrect_answers[0]
                          }
                          onClick={this.handleItemClick}
                        >
                          <b style={{ marginRight: '8px' }}>D.</b>
                          {quizData[0].incorrect_answers[0]}
                        </Menu.Item>
                      </Menu>
                    </Item.Meta>
                    <Divider />
                    <Item.Extra>
                      {!userSlectedAns && (
                        <Button primary floated="right" size="big" disabled>
                          Next
                          <Icon name="right chevron" />
                        </Button>
                      )}
                      {userSlectedAns && (
                        <Button primary floated="right" size="big">
                          Next
                          <Icon name="right chevron" />
                        </Button>
                      )}
                    </Item.Extra>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Segment>
          </Container>
        )}
      </div>
    );
  }
}

export default Quiz;
