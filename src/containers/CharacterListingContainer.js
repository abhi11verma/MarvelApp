import {connect} from 'react-redux';
import {getCharacters} from 'src/action/charactersListingAction';
import CharacterListing from 'src/views/CharacterListing';

const mapStateToProps = ({characters: {characters, isLoading,isError}}) => (
  {
    characters,
    isLoading,
    isError
  }
);

export default connect(mapStateToProps, {getCharacters})(CharacterListing);
