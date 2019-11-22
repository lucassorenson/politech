import { connect } from 'react-redux';
import AppComponent from './AppComponent';

import { appOperations } from './duck';

const mapStateToProps = (state) => {
    const { searchValue, gifId, gifUrl, loading } = state.app;
    return {
        searchValue,
        gifId,
        gifUrl,
        loading
    }
};

const mapDispatchToProps = (dispatch) => {
  const updateSearchValue = (value) => dispatch(appOperations.updateSearchValue(value))
  const onFetchGif = (currentValue) => dispatch(appOperations.fetchGif(currentValue)) //need to change this to whatever user types in
  return  { 
    onFetchGif,
    updateSearchValue 
  }
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppComponent)

export default AppContainer;