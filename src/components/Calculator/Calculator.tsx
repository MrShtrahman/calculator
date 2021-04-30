import { Card, Grid, GridColumn } from "semantic-ui-react";
import React, { FC, useCallback, useEffect } from "react";

import Buttons from "./Buttons/Buttons";
import History from "./History/History";
import Memory from "./Memory/Memory";
import Result from "./Result/Result";
import Header from "./Header/Header";
import { useOnKeyPress } from "../../hooks/useOnKeyPress";
import { useSelector } from "../../redux/useSelector";

const Calculator: FC = () => {
  const { isMemoShown, display, calcHistory, isDarkMode } = useSelector(state => {
    return {
      isMemoShown: state.memo.isMemoShown,
      display: state.calcBasic.display,
      calcHistory: state.calcMetadata.history,
      isDarkMode: state.settings.isDarkMode
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
    <Grid columns={4} centered padded={true}>
      <GridColumn>
        <Card style={isDarkMode ? 
          { backgroundColor: "white", color: 'black', transition: "all 2s ease" } : 
          { backgroundColor: "#352d2d", color: 'white', transition: "all 2s ease" }}>
          <Header title="Calculator A-la Shtrahman" isDarkMode={isDarkMode}/>
          <Memory isMemoShown={isMemoShown} />
          <History calcHistory={calcHistory} />
          <Result display={display} isDarkMode={isDarkMode}/>
          <br />
          <Buttons/>
        </Card>
      </GridColumn>
    </Grid>
  );
};

export default Calculator;
