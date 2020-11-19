import {connect} from 'react-redux';
import {
  getCharacters,
  getNextSetOfCharacters,
  searchBarState,
  searchCharactersByName,
} from 'src/action/charactersListingAction';
import CharacterListing from 'src/views/CharacterListing';

const mapStateToProps = ({characters: {characters, isLoading, isError, offset, isSearchActive}}) => (
  {
    characters,
    isLoading,
    isError,
    offset,
    isSearchActive,
  }
);

export default connect(mapStateToProps, {getCharacters, searchBarState,searchCharactersByName})(CharacterListing);
