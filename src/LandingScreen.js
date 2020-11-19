import React from 'react';
import {Button, ButtonGroup, Icon, Layout, Text} from '@ui-kitten/components';
import {StyleSheet, View} from 'react-native';

const HeartIcon = (props) => (
  <Icon {...props} name='heart'/>
);

function LandingScreen({counter, increment, decrement,getUsers}) {
  return (
    <Layout style={styles.container}>
      <Text style={styles.text} category='h1'>
        Welcome to UI Kitten 😻
      </Text>
      <Text category='h1'>
        KittenSkeleton
      </Text>
      <Text style={styles.text} category='s1'>
        Start with editing App.js to configure your App
      </Text>
      <Text style={styles.text} appearance='hint'>
        For example, try changing theme to Dark by using eva.dark
      </Text>
      <Button style={styles.likeButton} accessoryLeft={HeartIcon} onPress={getUsers}>
        CONSOLE LOG USERS
      </Button>
      <View style={{alignItems: 'center'}}>
        <Text category='h3'>{counter}</Text>
        <ButtonGroup size='medium'>
          <Button onPress={decrement}>-</Button>
          <Button onPress={increment}>+</Button>
        </ButtonGroup>
      </View>
    </Layout>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginVertical: 16,
  },
});


export default LandingScreen;
