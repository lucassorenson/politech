import { connect } from 'react-redux';
import AppComponent from './AppComponent';

import { appOperations } from './duck';



const mapStateToProps = (state) => {
    const { searchValue, weirdness, likedGifs, gifData, loading, totalWeirdnessScore } = state.app;
    return {
        searchValue,
        weirdness,
        likedGifs,
        gifData,
        loading,
        totalWeirdnessScore
    }
};

const mapDispatchToProps = (dispatch) => {
  const updateSearchValue = (value) => dispatch(appOperations.updateSearchValue(value))
  const onFetchGif = (currentValue, weirdness) => dispatch(appOperations.fetchGif(currentValue, weirdness))
  const changeWeirdness = (weirdness) => dispatch(appOperations.changeWeirdness(weirdness))
  const likeGif = ({gifData}) => dispatch(appOperations.likeGif({ ...gifData }))
  const calculateWeirdness = (likedGifs) => dispatch(appOperations.calculateWeirdness(likedGifs))
  const startOver = () => dispatch(appOperations.startOver())

  return { 
    onFetchGif,
    updateSearchValue,
    changeWeirdness,
    likeGif,
    calculateWeirdness,
    startOver
  }
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppComponent)

export default AppContainer;