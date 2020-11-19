import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import Splash from 'src/components/Splash';
import LandingScreenContainer from 'src/containers/LandingScreenContainer';


const {Navigator, Screen} = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode='none'>
    <Screen name='Splash' component={Splash}/>
    <Screen name='Landing' component={LandingScreenContainer}
            options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator/>
  </NavigationContainer>
);
