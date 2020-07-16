import { connect } from 'react-redux';
import View from './view';
import { charactersActions } from '../../../redux/characters';

const mapStateToProps = (state) => {
  return {
    loading: state.characters.loading,
    list: state.characters.list,
    page: state.characters.page,
    pages: state.characters.pages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initCharactersList: () => dispatch(charactersActions.initList()),
    fetchNextCharactersPage: () => dispatch(charactersActions.fetchNextPage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
