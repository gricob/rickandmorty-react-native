import React from 'react';
import { SafeAreaView, Text, FlatList, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';


class Characters extends React.Component {
  componentDidMount() {
    this.props.initCharactersList();
  }

  _onEndReached = ({distanceFromEnd}) => {
    console.log('endReached');
    const {page, pages, loading} = this.props;
    if (!loading && page < pages) {
      this.props.fetchNextCharactersPage();
    }
  };


  render() {
    const loading = this.props.loading;
    const list = this.props.list;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={list}
          keyExtractor={(item, index) => `character-${item.id}`}
          renderItem={({item}) => (
            <Text>{ item.name }</Text>
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
  total: PropTypes.number,
}

export default Characters;