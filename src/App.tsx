import React, { FC } from "react";

import Interface from "./hoc/Interface";
import Routes from "./components/Routes";

const App: FC = () => <Routes />;

export default Interface(App);
