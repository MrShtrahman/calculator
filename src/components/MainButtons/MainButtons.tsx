import { Grid, Header, Segment } from "semantic-ui-react";
import React, { FC } from "react";

import LinkButton from "../../hoc/LinkButton";
import LoginModal from "../Login/Modals/LoginModal";
import { useSelector } from "../../redux/useSelector";

const LinkButtons: FC = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <Segment>
      <Grid>
        <Grid.Column textAlign="center">
          <Grid.Row>
            <Header size="huge">
              {auth.name
                ? `Welcome to the calculator, ${auth.name}`
                : "Please log in to continue"}
            </Header>
          </Grid.Row>
          <br />
          <br />
          <Grid.Row>
            <LoginModal />
          </Grid.Row>
          <br />
          <Grid.Row>
            <LinkButton to="/calculator" color="green" disabled={!auth.isAuth}>
              Go to calculator
            </LinkButton>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default LinkButtons;
