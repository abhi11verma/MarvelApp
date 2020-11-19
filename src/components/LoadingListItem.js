import {Card, Text, withStyles} from '@ui-kitten/components';
import React from 'react';

const LoadingListItem = (props) => {
  const {eva, style, ...restProps} = props;

  return (
    <Card style={[eva.style.container]}>
      <Text>Getting Data...</Text>
    </Card>
  );
};


const styling = (theme) => ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default withStyles(LoadingListItem, styling);


