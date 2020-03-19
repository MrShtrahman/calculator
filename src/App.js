import Calculator from './components/Calculator/Calculator';
import Interface from './hoc/Interface';
import React from 'react';

const App = () => {
  return (
    <Calculator />
  )
}

export default Interface(App);
