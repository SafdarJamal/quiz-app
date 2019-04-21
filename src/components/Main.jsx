import React from 'react';
import { Segment, Item, Button, Icon } from 'semantic-ui-react';

export default () => (
  <Segment attached>
    <Item.Group divided>
      <Item>
        <Item.Image src={require('../assets/code.png')} />
        <Item.Content>
          <h1>Open Trivia Qestions</h1>
          <Item.Meta>
            <h5 className="cinemas">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
              magnam consequuntur quod odio perferendis dolores vitae
              dignissimos enim! Vel, nobis ad. Non, quia illo. Optio ipsam
              consequatur doloremque a iure? Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Consequuntur doloribus praesentium
              repellendus magnam tenetur blanditiis in mollitia magni ad!
              Temporibus dolorem officiis tenetur at aspernatur quaerat suscipit
              doloribus adipisci corrupti! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Porro, quod repellat quaerat
              corrupti necessitatibus tempore voluptas libero ratione atque ab
              similique sunt iste officiis obcaecati earum odit mollitia.
              Numquam, ipsum.
            </h5>
          </Item.Meta>
          <Item.Extra>
            <Button primary>
              Start Quiz
              <Icon name="right chevron" />
            </Button>
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  </Segment>
);
