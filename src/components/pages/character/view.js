import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { Actions } from 'react-native-router-flux';

class Character extends React.Component {

  render() {
    const character = this.props.character;
    const image = character.image
      ? {uri: character.image}
      : require('../../../assets/images/placeholder.jpg');

    return (
      <>
      <Image source={image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{ character.name }</Text>
        <Text>Species: { character.species }</Text>
        <Text>Origin: { character.origin.name }</Text>
        <Text>Status: { character.status }</Text>
      </View>
      </>
    )
  }
}

export default Character;