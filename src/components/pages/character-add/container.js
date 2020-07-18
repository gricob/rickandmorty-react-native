import {connect} from 'react-redux';
import {CharactersForm} from '../../organisms';
import {charactersActions} from '../../../redux/characters';
import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => {
  return {
    loading: state.characters.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (data) => {
      dispatch(charactersActions.postCharacter(data));
      Actions.pop();
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharactersForm);