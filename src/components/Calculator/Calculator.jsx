import { Card, CardContent, Grid, GridColumn } from 'semantic-ui-react';

import Buttons from './Buttons/Buttons';
import React from 'react';
import Result from './Result/Result';

const Calculator = () => {
    
    return (
        <Grid columns = {4} centered>
          <GridColumn>
            <Card>
            <CardContent header='Welcome to my Calculator' />
            <CardContent extra />
              <Result value = {0}/>
              <br/>
              <Buttons />
            </Card>        
          </GridColumn>
        </Grid>
      )
}

export default Calculator;