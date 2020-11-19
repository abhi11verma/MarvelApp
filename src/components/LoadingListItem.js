import {Card, Text, withStyles} from '@ui-kitten/components';
import React from 'react';

const LoadingListItem = (props) => {
  const {eva,isLoading, style, ...restProps} = props;

  return (
    <Card style={[eva.style.container]}>
      {isLoading ? <Text>Getting Data...</Text> : <Text appearance='hint'>No Data Available...</Text>}
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


