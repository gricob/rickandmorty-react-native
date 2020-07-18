import React from 'react';
import { SafeAreaView, FlatList, RefreshControl } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CharacterCard } from '../../molecules';
import PropTypes from 'prop-types';
import styles from './styles';


class Characters extends React.Component {
  componentDidMount() {
    this.props.initCharactersList();
  }

  _onEndReached = ({distanceFromEnd}) => {
    const {page, pages, loading} = this.props;
    
    if (!loading && page < pages) {
      this.props.fetchNextCharactersPage();
    }
  };

  _onCharacterPress = (character) => {
    Actions.push('character', { character, title: character.name });
  };


  render() {
    const loading = this.props.loading;
    const list = this.props.list;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={list}
          keyExtractor={(item, index) => `character-${index}`}
          renderItem={({item}) => (
            <CharacterCard character={ item } onPress={(character) => this._onCharacterPress(character)}/>
          )}
          onEndReached={this._onEndReached}
          onEndReachedThreshold={0.8}
          refreshControl={
            <RefreshControl
              colors={['white']}
              tintColor={'white'}
              refreshing={loading}
              onRefresh={this.props.getCharacters}
              title={'Loading...'}
              titleColor={'white'}
            />
          }
        />
      </SafeAreaView>
    )
  }
}

Characters.propTypes = {
  initCharactersList: PropTypes.func,
  fetchNextCharactersPage: PropTypes.func,
  loading: PropTypes.bool,
  list: PropTypes.arrayOf(PropTypes.object),
  page: PropTypes.number,
  pages: PropTypes.number,
}

export default Characters;