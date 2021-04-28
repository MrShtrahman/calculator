import "./Result.css"
import { Form, FormInput } from "semantic-ui-react";
import React, { FC } from "react";

import { ResultType } from "./ResultType";

const Result: FC<ResultType> = ({ display, isDarkMode }) => {
  return (
    <Form>
      <FormInput fluid readOnly data-testid="result-label">
        <div className={"result"} style={isDarkMode ? {color: "black"} : {color: "white"}}>
          {display}
        </div>
      </FormInput>
    </Form>
  );
};

export default Result;
