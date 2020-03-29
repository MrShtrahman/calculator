import { Form, FormInput } from "semantic-ui-react";
import React, { FC } from "react";

import { ResultType } from "./ResultType";

const Result: FC<ResultType> = ({ display }) => {
  return (
    <Form>
      <FormInput fluid readOnly data-testid="result-label">
        {display}
      </FormInput>
    </Form>
  );
};

export default Result;
