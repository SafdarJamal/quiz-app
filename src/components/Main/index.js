import React, { Component } from 'react';
import { Container, Segment, Item, Divider, Button } from 'semantic-ui-react';
import codeImg from '../../assets/images/code.png';

import Select from '../Select';
import {
  CATEGORIES,
  NUM_OF_QUESTIONS,
  DIFFICULTY,
  QUESTIONS_TYPE,
  COUNTDOWN_TIME
} from '../../constants';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: null,
      numOfQ: null,
      difficulty: null,
      type: null,
      time: null
    };

    this.setValue = this.setValue.bind(this);
  }

  setValue(name, value) {
    this.setState({ [name]: value });
  }

  render() {
    const { category, numOfQ, difficulty, type, time } = this.state;
    // console.log(category, numOfQ, difficulty, type, time);

    let allFieldsSelected = false;
    let selectedValues = null;

    if (category && numOfQ && difficulty && type && time) {
      allFieldsSelected = true;

      selectedValues = {
        category,
        numOfQ,
        difficulty,
        type,
        time
      };
    }

    return (
      <Container>
        <Segment>
          <Item.Group divided>
            <Item>
              <Item.Image src={codeImg} />
              <Item.Content>
                <Item.Header>
                  <h1>Open Trivia Questions</h1>
                </Item.Header>
                <br />
                <Divider />
                <Item.Meta>
                  <Select
                    name="category"
                    text="Select Quiz Category"
                    options={CATEGORIES}
                    onChange={this.setValue}
                  />
                  <br />
                  <Select
                    name="numOfQ"
                    text="Select No. of Questions"
                    options={NUM_OF_QUESTIONS}
                    onChange={this.setValue}
                  />
                  <br />
                  <Select
                    name="difficulty"
                    text="Select Difficulty Level"
                    options={DIFFICULTY}
                    onChange={this.setValue}
                  />
                  <br />
                  <Select
                    name="type"
                    text="Select Questions Type"
                    options={QUESTIONS_TYPE}
                    onChange={this.setValue}
                  />
                  <br />
                  <Select
                    name="time"
                    text="Select Countdown Time (In Minutes)"
                    options={COUNTDOWN_TIME}
                    onChange={this.setValue}
                  />
                </Item.Meta>
                <Divider />
                <Item.Extra>
                  {allFieldsSelected ? (
                    <Button
                      primary
                      content="Start Quiz"
                      onClick={() => this.props.startQuiz(selectedValues)}
                      size="big"
                      icon="play"
                      labelPosition="left"
                    />
                  ) : (
                    <Button
                      disabled
                      primary
                      content="Start Quiz"
                      size="big"
                      icon="play"
                      labelPosition="left"
                    />
                  )}
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <br />
      </Container>
    );
  }
}

export default Main;
