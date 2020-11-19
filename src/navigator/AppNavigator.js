import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import Splash from 'src/components/Splash';
import CharacterListingContainer from 'src/containers/CharacterListingContainer';
import CharacterDetails from 'src/views/CharacterDetails';


const {Navigator, Screen} = createStackNavigator();

const HomeNavigator = () => (
  <Navigator>
    <Screen name='Splash' component={Splash} options={{
      headerShown: false,
    }}/>

    <Screen name='CharacterListing' component={CharacterListingContainer}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              headerShown: false,
              headerLeft: null,
            }}/>

    <Screen name='Character' component={CharacterDetails}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              headerShown: false
            }}/>

  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator/>
  </NavigationContainer>
);
