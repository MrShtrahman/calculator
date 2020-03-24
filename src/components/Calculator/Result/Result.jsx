import { Form, FormInput } from "semantic-ui-react";

import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
  const display = useSelector(state => state.calculatorBasicReducer.display);
  return (
    <Form>
      <FormInput fluid readOnly data-testid="result-label">
        {display}
      </FormInput>
    </Form>
  );
};

export default Result;
