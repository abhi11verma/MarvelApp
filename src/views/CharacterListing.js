import React, {useEffect} from 'react';
import {Layout, List, Text, TopNavigation} from '@ui-kitten/components';
import {StyleSheet, View} from 'react-native';
import CharacterListItem from 'src/components/CharacterListItem';
import LoadingListItem from 'src/components/LoadingListItem';

function CharacterListing({characters, getCharacters, getNextSetOfCharacters, isLoading, offset, isError}) {

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <Layout style={styles.container}>
      <TopNavigation
        alignment='center'
        title={'MARVEL CHARACTERS'}
      />
      {isError ?
          <View style={styles.messageContainer}>
            <Text status='warning'>Error Fetching Data, Please verify the api keys.</Text>
          </View>
          :
        <List
          data={characters}
          ListEmptyComponent={LoadingListItem}
          contentContainerStyle={styles.contentContainer}
          onEndReached={() => getNextSetOfCharacters(offset)}
          onEndReachedThreshold={0.5}
          onRefresh={getCharacters}
          refreshing={isLoading}
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
