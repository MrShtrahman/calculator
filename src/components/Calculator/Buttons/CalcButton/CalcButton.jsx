import { Button } from 'semantic-ui-react';
import React from 'react';
import { useOnClick } from '../../../../hooks/useOnClick';
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

const CalcButton = ({value}) => {
    const onClick = useOnClick();
    return <Button 
        value = {value} 
        size = 'large' 
        active = {false}
        inverted 
        style = {{
            height: '65px',
            width: '65px'
        }}
        color = {chooseColor(value)} 
        onClick = {() => onClick(value)} 
        content = {value}>
    </Button>
}

export default CalcButton