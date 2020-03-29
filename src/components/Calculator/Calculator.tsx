import { Card, CardContent, Grid, GridColumn } from "semantic-ui-react";
import React, { FC, useCallback, useEffect } from "react";

import Buttons from "./Buttons/Buttons";
import History from "./History/History";
import Memory from "./Memory/Memory";
import Result from "./Result/Result";
import { useOnKeyPress } from "../../hooks/useOnKeyPress";
import { useSelector } from "../../redux/useSelector";

const Calculator: FC = () => {
  const { isMemoShown, display, calcHistory } = useSelector(state => {
    return {
      isMemoShown: state.memo.isMemoShown,
      display: state.calcBasic.display,
      calcHistory: state.calcMetadata.history
    };
  });
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
          <CardContent header="Calculator A-la Shtrahman" />
          <Memory isMemoShown={isMemoShown} />
          <History calcHistory={calcHistory} />
          <Result display={display} />
          <br />
          <Buttons />
        </Card>
      </GridColumn>
    </Grid>
  );
};

export default Calculator;
