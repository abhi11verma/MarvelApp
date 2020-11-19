import {Divider, Layout, Text, withStyles} from '@ui-kitten/components';
import React from 'react';
import {View} from 'react-native';
import {normalizeSize} from 'src/helper';
import _ from 'lodash';

const OtherDetailsItem = (props) => {
  const {eva, style, item, ...restProps} = props;

  return (
    <Layout style={[eva.style.container]}>
      <Text category='s2' style={{fontSize: normalizeSize(12)}}>{_.get(item, 'name')}</Text>
    </Layout>
  );
};


const styling = (theme) => ({
  container: {
    paddingVertical:10
  },
});


export default withStyles(OtherDetailsItem, styling);


