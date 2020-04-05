import React, { FC, MouseEvent } from "react";

import { Button } from "semantic-ui-react";
import { RouteComponentProps } from "react-router-dom";
import { withRouter } from "react-router-dom";

type LinkButtonProps = {
  to: string;
  onClick?: any;
};

const LinkButton: FC<RouteComponentProps & LinkButtonProps> = ({
  history,
  location,
  to,
  onClick,
  match,
  staticContext,
  ...rest
}) => (
  <Button
    {...rest}
    color="green"
    size="large"
    onClick={(event: MouseEvent) => {
      onClick && onClick(event);
      history.push(to);
    }}
  />
);

export default withRouter(LinkButton);
