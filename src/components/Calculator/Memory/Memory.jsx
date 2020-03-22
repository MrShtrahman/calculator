import { CardContent } from 'semantic-ui-react';
import React from 'react';
import { useSelector } from 'react-redux';

const Memory = () => {
    const isMemoShown = useSelector(state => state.memoReducer.isMemoIndication)
    return (
        <CardContent content = {isMemoShown ? 'M' : ''}  />
    )
}

export default Memory