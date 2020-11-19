import React, {useEffect} from 'react';
import {Layout, List, Text, TopNavigation} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';
import CharacterListItem from 'src/components/CharacterListItem';

function CharacterListing({characters, getCharacters, isLoading}) {

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <Layout style={styles.container}>
      <TopNavigation
        alignment='center'
        title={'MARVEL CHARACTERS'}
      />
      {isLoading ? <Text>Getting Data...</Text> :
        <List
          data={characters}
          contentContainerStyle={styles.contentContainer}
          renderItem={({item, index}) =>
            <CharacterListItem
              style={styles.item}
              key={index}
              character={item}
            />}
        />
      }
    </Layout>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    marginVertical: 4,
  },
});


export default CharacterListing;
