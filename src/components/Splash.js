import {Text, withStyles} from '@ui-kitten/components';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {normalizeSize} from 'src/helper';
import {useNavigation} from '@react-navigation/native';

const Splash = (props) => {
  const {eva, style, ...restProps} = props;
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => navigation.navigate('Landing'), 1000);
    return () => clearTimeout(timeout);
  });


  return (
    <View style={[eva.style.container]}>
      <Text category='h1' style={eva.style.text}>
        SPLASH
      </Text>
    </View>
  );
};


const styling = (theme) => ({
  container: {
    backgroundColor: theme['color-primary-600'],
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: normalizeSize(64),
    borderWidth: 1,
    borderColor: '#ffffff',
    paddingHorizontal: normalizeSize(20),
    paddingVertical: normalizeSize(10),
  },
});


export default withStyles(Splash, styling);


