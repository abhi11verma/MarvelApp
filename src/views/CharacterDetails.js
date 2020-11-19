import {Card, Icon, Text, TopNavigation, TopNavigationAction, withStyles} from '@ui-kitten/components';
import React from 'react';
import {Image, ScrollView, StatusBar, View} from 'react-native';
import _ from 'lodash';
import {getImage, IMAGE_SIZE_OPTIONS, normalizeSize} from 'src/helper';
import OtherDetailsList from 'src/components/OtherDetailsList';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back'/>
);

const CharacterDetails = (props) => {
  const {eva, style, navigation, route, ...restProps} = props;
  const character = _.get(route.params, 'character');
  const description = _.get(character, 'description');

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigation.goBack}/>
  );

  return (
    <View style={[eva.style.container]}>
      <TopNavigation
        accessoryLeft={BackAction}
        title={_.get(character, 'name', '')}
      />

      <ScrollView contentContainerStyle={{paddingBottom: StatusBar.currentHeight + 50}}>
        <Card style={[eva.style.cardStyle, eva.style.imageContainer]}>
          <Image
            source={{uri: getImage(character.thumbnail.path, character.thumbnail.extension, IMAGE_SIZE_OPTIONS.portrait.LARGE)}}
            style={eva.style.portraitImage}
          />
        </Card>

        <Card style={eva.style.cardStyle}>
          <Text category='s1' style={{fontSize:normalizeSize(12),marginBottom:4,fontWeight: 'bold'}}>About</Text>
          {_.isEmpty(description) ?
            <Text appearance='hint' style={eva.style.descriptionText}>
              Looks like {character.name} forgot to fill bio!! 😉
            </Text>
            :
            <Text category='p2' style={eva.style.descriptionText}>{description}</Text>}
        </Card>

        <Card style={eva.style.cardStyle}>
          <OtherDetailsList
            listName={'Series'}
            listData={_.get(character,'series.items')}
          />
        </Card>

        <Card style={eva.style.cardStyle}>
          <OtherDetailsList
            listName={'Stories'}
            listData={_.get(character,'stories.items')}
          />
        </Card>

        <Card style={eva.style.cardStyle}>
          <OtherDetailsList
            listName={'Comics'}
            listData={_.get(character,'comics.items')}
          />
        </Card>
      </ScrollView>
    </View>
  );
};

const styling = (theme) => ({
  container: {},
  portraitImage: {
    height: 450,
    width: 300,
    borderRadius:4
  },
  descriptionText: {
    marginTop: normalizeSize(4),
  },
  cardStyle: {
    marginVertical: 4,
    marginHorizontal: 8,
  },
  imageContainer: {
    alignItems: 'center',
    backgroundColor:theme['background-basic-color-2']
  },
});


export default withStyles(CharacterDetails, styling);


