import { connect } from 'react-redux';
import View from './view';
import { charactersActions } from '../../../redux/characters';

const mapStateToProps = (state) => {
  return {
    loading: state.characters.loading,
    list: state.characters.list
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initCharactersList: () => dispatch(charactersActions.initList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
