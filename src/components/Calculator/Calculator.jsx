import { Card, CardContent, Grid, GridColumn } from 'semantic-ui-react';

import Buttons from './Buttons/Buttons';
import React from 'react';
import Result from './Result/Result';
import { useSelector } from 'react-redux';

const Calculator = () => {  

  const isMemoShown = useSelector(state => state.memoReducer.isMemoIndication)

    return (
        <Grid columns = {4} centered>
          <GridColumn>
            <Card>
            <CardContent header='Calculator A-la Shtrahman' />
            <CardContent content = {isMemoShown ? 'M' : ''}  />
            <Result />
            <br/>
            <Buttons />
            </Card>        
          </GridColumn>
        </Grid>
      )
}

export default Calculator;