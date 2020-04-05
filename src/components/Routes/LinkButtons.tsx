import { Grid, Segment } from "semantic-ui-react";
import React, { FC } from "react";

import LinkButton from "./LinkButton";

const LinkButtons: FC = () => (
  <Segment>
    <Grid>
      <Grid.Column textAlign="center">
        <LinkButton to="/calculator">Go to calculator</LinkButton>
      </Grid.Column>
    </Grid>
  </Segment>
);

export default LinkButtons;
