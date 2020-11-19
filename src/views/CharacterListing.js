import React, {useEffect} from 'react';
import {Icon, Layout, List, Text, TopNavigation, TopNavigationAction, useTheme} from '@ui-kitten/components';
import {StyleSheet, View} from 'react-native';
import CharacterListItem from 'src/components/CharacterListItem';
import LoadingListItem from 'src/components/LoadingListItem';
import SearchBar from 'src/components/SearchBar';

function CharacterListing({
                            characters,
                            getCharacters,
                            isLoading,
                            offset,
                            isError,
                            isSearchActive,
                            searchBarState,
                            searchCharactersByName,
                          }) {

  const theme = useTheme();
  useEffect(() => {
    getCharacters();
  }, []);

  const searchIcon = (props) => (
    <Icon {...props} name='search' onPress={() => searchBarState(true)}/>
  );

  const searchAction = (props) => (
    <>
      <TopNavigationAction icon={searchIcon}/>
    </>
  );

  return (
    <Layout style={styles.container}>
      {isSearchActive ? <SearchBar searchBarState={searchBarState} searchFn={searchCharactersByName}/> :
        <TopNavigation
          alignment='center'
          title={<Text category={'s1'} style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>MARVEL
            CHARACTERS</Text>}
          style={{backgroundColor: theme['color-primary-600'], height: 50}}
          accessoryRight={searchAction}
        />}
      {isError ?
          <View style={styles.messageContainer}>
            <Text status='warning'>Error Fetching Data, Please verify the api keys.</Text>
          </View>
          :
        <List
          data={characters}
          ListEmptyComponent={<LoadingListItem isLoading={isLoading}/>}
          contentContainerStyle={styles.contentContainer}
          onEndReached={() => getCharacters()}
          onEndReachedThreshold={0.4}
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
