import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, View } from 'react-native';
import { Input, Button } from '../../atoms';
import styles from './styles';
import _ from 'lodash';

class CharacterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      species: '',
      origin: {
        name: ''
      },
      status: '',
      errors: {}
    }
  }

  _onSubmit = () => {
    const {name, species, origin, status} = this.state;
    const {onSubmit} = this.props;

    const errors = {};
    const requiredMessage = 'This field is required';
    if (!name) {
      errors.name = requiredMessage;
    }

    if (!species) {
      errors.species = requiredMessage;
    }

    if (!origin.name) {
      errors.origin = requiredMessage;
    }

    if (!status) {
      errors.status = requiredMessage;
    }

    this.setState({errors});

    if (_.size(errors)) {
      return;
    }

    const character = {
      name,
      species,
      origin,
      status
    };

    onSubmit(character);
  }

  render() {
    const {name, errors, species, origin, status} = this.state;
    const {loading, onSubmit} = this.props;

    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Input 
            placeholder="Name" 
            label="Name"
            value={name}
            onChangeText={(v) => this.setState({name: v})}
            error={errors.name}
          />
          <Input 
            placeholder="Species" 
            label="Species"
            value={species}
            onChangeText={(v) => this.setState({species: v})}
            error={errors.species}
          />
          <Input 
            placeholder="Origin" 
            label="Origin"
            value={origin.name}
            onChangeText={(v) => this.setState({origin: {name: v}})}
            error={errors.origin}
          />
          <Input 
            placeholder="Status" 
            label="Status"
            value={status}
            onChangeText={(v) => this.setState({status: v})}
            error={errors.status}
          />
          <Button
            style={styles.submitButton}
            onPress={this._onSubmit}
            label="Add"
          />
        </View>
      </SafeAreaView>
    )
  }
}

CharacterForm.propTypes = {
  loading: PropTypes.bool,
  onSubmit: PropTypes.func
}

export default CharacterForm;