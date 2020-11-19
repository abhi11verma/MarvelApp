import React, {useEffect} from 'react';
import {Layout, List, Text, TopNavigation} from '@ui-kitten/components';
import {StyleSheet, View} from 'react-native';
import CharacterListItem from 'src/components/CharacterListItem';

function CharacterListing({characters, getCharacters, isLoading, isError}) {

  useEffect(() => {
    getCharacters();
  }, []);


  return (
    <Layout style={styles.container}>
      <TopNavigation
        alignment='center'
        title={'MARVEL CHARACTERS'}
      />
      {isLoading ?
        <View style={styles.messageContainer}>
          <Text>Getting Data...</Text>
        </View>
        : isError ?
          <View style={styles.messageContainer}>
            <Text status='warning'>Error Fetching Data, Please verify the api keys.</Text>
          </View>
          :
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
  messageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});


export default CharacterListing;
