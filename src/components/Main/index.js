import React, { Component } from 'react';
import {
  Container,
  Segment,
  Item,
  Dropdown,
  Divider,
  Button
} from 'semantic-ui-react';
import codeImg from '../../assets/images/code.png';

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
                  <Dropdown
                    fluid
                    selection
                    name="category"
                    placeholder="Select Quiz Category"
                    options={CATEGORIES}
                    onChange={(e, { name, value }) =>
                      this.setValue(name, value)
                    }
                  />
                  <br />
                  <Dropdown
                    fluid
                    selection
                    name="numOfQ"
                    placeholder="Select No. of Questions"
                    options={NUM_OF_QUESTIONS}
                    onChange={(e, { name, value }) =>
                      this.setValue(name, value)
                    }
                  />
                  <br />
                  <Dropdown
                    fluid
                    selection
                    name="difficulty"
                    placeholder="Select Difficulty Level"
                    options={DIFFICULTY}
                    onChange={(e, { name, value }) =>
                      this.setValue(name, value)
                    }
                  />
                  <br />
                  <Dropdown
                    fluid
                    selection
                    name="type"
                    placeholder="Select Questions Type"
                    options={QUESTIONS_TYPE}
                    onChange={(e, { name, value }) =>
                      this.setValue(name, value)
                    }
                  />
                  <br />
                  <Dropdown
                    fluid
                    selection
                    name="time"
                    placeholder="Select Countdown Time (In Minutes)"
                    options={COUNTDOWN_TIME}
                    onChange={(e, { name, value }) =>
                      this.setValue(name, value)
                    }
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
