import { connect } from 'react-redux';
import AppComponent from './AppComponent';

import { appOperations } from './duck';

const mapStateToProps = (state) => {
    const { searchValue, weirdness, likedGifs, gifId, gifUrl, loading } = state.app;
    return {
        searchValue,
        weirdness,
        likedGifs,
        gifId,
        gifUrl,
        loading
    }
};

const mapDispatchToProps = (dispatch) => {
  const updateSearchValue = (value) => dispatch(appOperations.updateSearchValue(value))
  const onFetchGif = (currentValue, weirdness) => dispatch(appOperations.fetchGif(currentValue, weirdness))
  const changeWeirdness = (weirdness) => dispatch(appOperations.changeWeirdness(weirdness))
  const likeGif = ({gifId, gifUrl, weirdness}) => dispatch(appOperations.likeGif({gifId, gifUrl, weirdness}))
  return { 
    onFetchGif,
    updateSearchValue,
    changeWeirdness,
    likeGif
  }
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppComponent)

export default AppContainer;