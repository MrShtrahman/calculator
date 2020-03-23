import { Button } from 'semantic-ui-react';
import React from 'react';

const CalcButton = ({value, clicked, color}) => <Button 
    value = {value} 
    size = 'large' 
    active = {false}
    inverted 
    style = {{
        height: '65px',
        width: '65px'
    }}
    color = {color} 
    onClick = {clicked} 
    content = {value}>
</Button>

export default CalcButton