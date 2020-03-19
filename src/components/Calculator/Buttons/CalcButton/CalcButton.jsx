import { Button } from 'semantic-ui-react';
import React from 'react';

const CalcButton = ({value, clicked}) => 
    <Button value = {value} size = 'large' inverted style = {{
        height: '65px',
        width: '65px'
    }}
    color = 'blue' onClick = {clicked}>{value}</Button>

export default CalcButton