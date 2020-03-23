import { Card, CardContent, Grid, GridColumn } from "semantic-ui-react";
import React, { useCallback, useEffect } from "react";

import Buttons from "./Buttons/Buttons";
import Memory from "./Memory/Memory";
import Result from "./Result/Result";
import { useOnKeyPress } from "../../hooks/useOnKeyPress";

const Calculator = () => {
  const onKeyPress = useOnKeyPress();
  const keyDownHandler = useCallback(
    event => {
      const { key } = event;
      onKeyPress(key);
    },
    [onKeyPress]
  );

  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);
    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, [keyDownHandler]);

  return (
    <Grid columns={4} centered>
      <GridColumn>
        <Card>
          <CardContent header=" chtok chtok ya omo" />
          <Memory />
          <Result />
          <br />
          <Buttons />
        </Card>
      </GridColumn>
    </Grid>
  );
};

export default Calculator;
////Calculator A-la Shtrahman
