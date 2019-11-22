import { connect } from 'react-redux';
import AppComponent from './AppComponent';

import { appOperations } from './duck';

const mapStateToProps = (state) => {
    const { searchValue, likedGifs, gifId, gifUrl, loading } = state.app;
    return {
        searchValue,
        likedGifs,
        gifId,
        gifUrl,
        loading
    }
};

const mapDispatchToProps = (dispatch) => {
  const updateSearchValue = (value) => dispatch(appOperations.updateSearchValue(value))
  const onFetchGif = (currentValue) => dispatch(appOperations.fetchGif(currentValue))
  const likeGif = ({gifId, gifUrl}) => dispatch(appOperations.likeGif({gifId, gifUrl}))
  return { 
    onFetchGif,
    updateSearchValue,
    likeGif
  }
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppComponent)

export default AppContainer;