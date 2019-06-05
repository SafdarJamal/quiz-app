import React from 'react';
import { Container, Segment, Item, Divider, Button } from 'semantic-ui-react';
import codeImg from '../../assets/images/code.png';

import Select from '../Select';
import CATEGORIES from '../../constants/categories';
import DIFFICULTY from '../../constants/difficulty';
import QUESTIONS_TYPE from '../../constants/questionsType';
import NUM_OF_QUESTIONS from '../../constants/numOfQuestions';

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
            <Divider />
            <Item.Meta>
              <Segment size="large">
                <Select options={CATEGORIES} text="Select Quiz Category" />
              </Segment>
              <Segment size="large">
                <Select
                  options={NUM_OF_QUESTIONS}
                  text="Select No. of Questions"
                />
              </Segment>
              <Segment size="large">
                <Select options={DIFFICULTY} text="Select Difficulty Level" />
              </Segment>
              <Segment size="large">
                Passing Score: <b>60 out of 100</b>
              </Segment>
              <Segment size="large">
                <Select options={QUESTIONS_TYPE} text="Select Questions Type" />
              </Segment>
              <Segment size="large">
                Available Time: <b>4 Minutes</b>
              </Segment>
            </Item.Meta>
            <Divider />
            <Item.Extra>
              <Button
                primary
                content="Start Quiz"
                onClick={props.startQuiz}
                size="big"
                icon="play"
                labelPosition="right"
              />
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
    <br />
  </Container>
);
