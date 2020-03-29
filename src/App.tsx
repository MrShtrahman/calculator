import React, { FC } from "react";

import Calculator from "./components/Calculator/Calculator";
import Interface from "./hoc/Interface";

const App: FC = () => {
  return <Calculator />;
};

export default Interface(App);
