/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the UI Kitten template
 * https://github.com/akveo/react-native-ui-kitten
 *
 * Documentation: https://akveo.github.io/react-native-ui-kitten/docs
 *
 * @format
 */

import React from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import customTheme from 'src/theme/marvelColorTheme';
import 'react-native-gesture-handler';
import {AppNavigator} from 'src/navigator/AppNavigator';
import {Provider} from 'react-redux';
import configureStore from 'src/store/configureStore';


/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */
export const {store} = configureStore();

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={{...eva.light,...customTheme}}>
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    </ApplicationProvider>
  </>
);
