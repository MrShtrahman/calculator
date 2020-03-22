import { Button } from 'semantic-ui-react';
import React from 'react';

const chooseColor = value => {
    if(!isNaN(value)) return 'blue'
    else {
        switch(value) {
            case 'C':
                return 'red'
            default: return 'purple'
        }
    }
}

const CalcButton = ({value, clicked}) => <Button 
    value = {value} 
    size = 'large' 
    active = {false}
    inverted 
    style = {{
        height: '65px',
        width: '65px'
    }}
    color = {chooseColor(value)} 
    onClick = {clicked} 
    content = {value}>
</Button>

export default CalcButton