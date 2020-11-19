import {Divider, Text, withStyles} from '@ui-kitten/components';
import React from 'react';
import {View} from 'react-native';
import OtherDetailsItem from 'src/components/OtherDetailsItem';
import _ from 'lodash';
import {normalizeSize} from 'src/helper';


const OtherDetailsList = (props) => {
  const {eva, style, listName, listData, ...restProps} = props;
  return (
    <View style={[eva.style.container]}>
      <Text category='s1' style={{fontSize:normalizeSize(12),marginBottom:4,fontWeight: 'bold'}}>{listName} Appeared In</Text>
      <Divider/>
      {_.isEmpty(listData) ?
        <Text appearance='hint' style={{marginTop: normalizeSize(8)}}>No information available at this moment.</Text>
        : _.map(listData, (item, index) =>
          <OtherDetailsItem key={index} item={item}/>)}
    </View>
  );
};


const styling = (theme) => ({
  container: {},
});


export default withStyles(OtherDetailsList, styling);


