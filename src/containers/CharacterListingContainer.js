import {connect} from 'react-redux';
import {getCharacters, getNextSetOfCharacters} from 'src/action/charactersListingAction';
import CharacterListing from 'src/views/CharacterListing';

const mapStateToProps = ({characters: {characters, isLoading,isError,offset}}) => (
  {
    characters,
    isLoading,
    isError,
    offset
  }
);

export default connect(mapStateToProps, {getCharacters,getNextSetOfCharacters})(CharacterListing);
