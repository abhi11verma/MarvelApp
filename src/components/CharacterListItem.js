import React from 'react';
import {Image, View} from 'react-native';
import {Card, Text, withStyles} from '@ui-kitten/components';
import {getImage, IMAGE_SIZE_OPTIONS, normalizeSize} from 'src/helper';
import {useNavigation} from '@react-navigation/native';

const CharacterListItem = ({eva, style, character}) => {
  const navigation = useNavigation();

  return (
    <Card style={style} onPress={() => navigation.navigate('Character', {character: character})}>
      <View style={eva.style.container}>
        <View style={{borderRadius: 4}}>
          <Image
            source={{uri: getImage(character.thumbnail.path, character.thumbnail.extension, IMAGE_SIZE_OPTIONS.square.MEDIUM)}}
            style={eva.style.thumbnailImage}
          />
        </View>
        <View style={{marginLeft: normalizeSize(16), maxWidth: '70%'}}>
          <Text category='h6' style={eva.style.name}>{character.name}</Text>
        </View>
      </View>
    </Card>
  );
};


const styling = (theme) => ({
  container: {
    flexDirection: 'row',
  },
  thumbnailImage: {
    width: 100,
    height: 100,
    borderRadius: 4,
  },
  name: {},
});

export default withStyles(CharacterListItem, styling);



