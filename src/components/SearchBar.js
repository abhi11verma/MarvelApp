import {Icon, Input, withStyles} from '@ui-kitten/components';
import React, {useCallback, useState} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import _ from 'lodash';


const SearchBar = (props) => {
  const {eva, style, searchBarState, searchFn, ...restProps} = props;

  const [value, setValue] = useState('');

  const debounceFn = useCallback(_.debounce((value) => value !== '' && searchFn(value), 1000), []);

  const searchByName = (value) => {
    setValue(value);
    debounceFn(value);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={() => searchBarState(false)}>
      <Icon {...props} name={'close-circle-outline'}/>
    </TouchableWithoutFeedback>
  );

  return (
    <Input
      style={eva.style.container}
      value={value}
      size='large'
      placeholder='Enter character name eg. Iron man'
      accessoryRight={renderIcon}
      onChangeText={nextValue => searchByName(nextValue)}
    />
  );
};


const styling = (theme) => ({
  container: {
    marginTop: 4,
    marginHorizontal: 8,
  },
});


export default withStyles(SearchBar, styling);


