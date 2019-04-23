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
      isLoading: true,
      questionIndex: 0
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

    const { quizData, questionIndex } = this.state;
    const options = [...quizData[questionIndex].incorrect_answers];
    options.splice(outPut, 0, quizData[questionIndex].correct_answer);

    setTimeout(() => {
      this.setState({ isLoading: false, options, outPut });
    }, 1000);
  }

  render() {
    // const { quizData } = this.props;
    const {
      quizData,
      questionIndex,
      options,
      outPut,
      userSlectedAns,
      isLoading
    } = this.state;
    console.log(userSlectedAns);
    console.log(questionIndex, outPut);
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
                      <h1>Question No.{questionIndex + 1} of 10</h1>
                    </Item.Header>
                    <br />
                    <br />
                    <br />
                    <Item.Meta>
                      <Message size="huge" floating>
                        <b>{`Q. ${quizData[questionIndex].question}`}</b>
                      </Message>
                      <br />
                      <Item.Description>
                        <h3>Please choose one of the following answers:</h3>
                      </Item.Description>
                      <Divider />
                      <Menu vertical fluid size="massive">
                        {options.map((item, i) => {
                          let letter;
                          switch (i) {
                            case 0:
                              letter = 'A.';
                              break;
                            case 1:
                              letter = 'B.';
                              break;
                            case 2:
                              letter = 'C.';
                              break;
                            case 3:
                              letter = 'D.';
                              break;
                            default:
                              letter = i;
                              break;
                          }
                          return (
                            <Menu.Item
                              key={item}
                              name={item}
                              active={userSlectedAns === item}
                              onClick={this.handleItemClick}
                            >
                              <b style={{ marginRight: '8px' }}>{letter}</b>
                              {item}
                            </Menu.Item>
                          );
                        })}
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
