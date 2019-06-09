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

    this.state = {};

    this.setCategory = this.setCategory.bind(this);
    this.setNumOfQ = this.setNumOfQ.bind(this);
    this.setDifficulty = this.setDifficulty.bind(this);
    this.setQType = this.setQType.bind(this);
    this.setTime = this.setTime.bind(this);
  }

  setCategory(category) {
    this.setState({ category });
  }

  setNumOfQ(numOfQ) {
    this.setState({ numOfQ });
  }

  setDifficulty(difficulty) {
    this.setState({ difficulty });
  }

  setQType(type) {
    this.setState({ type });
  }

  setTime(time) {
    this.setState({ time });
  }

  render() {
    const { category, numOfQ, difficulty, type, time } = this.state;
    // console.log(category, numOfQ, difficulty, type, time);

    let allFieldsSelected = false;
    let selectedValues = [];

    if (category && numOfQ && difficulty && type && time) {
      selectedValues = [category, numOfQ, difficulty, type, time];
      allFieldsSelected = true;
    }

    return (
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
                <Divider />
                <Item.Meta>
                  <Select
                    options={CATEGORIES}
                    setValue={this.setCategory}
                    text="Select Quiz Category"
                  />
                  <br />
                  <Select
                    options={NUM_OF_QUESTIONS}
                    setValue={this.setNumOfQ}
                    text="Select No. of Questions"
                  />
                  <br />
                  <Select
                    options={DIFFICULTY}
                    setValue={this.setDifficulty}
                    text="Select Difficulty Level"
                  />
                  <br />
                  <Select
                    options={QUESTIONS_TYPE}
                    setValue={this.setQType}
                    text="Select Questions Type"
                  />
                  <br />
                  <Select
                    options={COUNTDOWN_TIME}
                    setValue={this.setTime}
                    text="Select Countdown Time (In Minutes)"
                  />
                </Item.Meta>
                <Divider />
                <Item.Extra>
                  {!allFieldsSelected && (
                    <Button
                      primary
                      content="Start Quiz"
                      disabled
                      size="big"
                      icon="play"
                      labelPosition="right"
                    />
                  )}
                  {allFieldsSelected && (
                    <Button
                      primary
                      content="Start Quiz"
                      onClick={() => this.props.startQuiz(selectedValues)}
                      size="big"
                      icon="play"
                      labelPosition="right"
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
