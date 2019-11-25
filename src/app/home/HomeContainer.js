import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';
import { homeOperations } from '../duck';



const mapStateToProps = (state) => {
  const { searchValue, weirdness, likedGifs, gifData, loading } = state.home;
  return {
    searchValue,
    weirdness,
    likedGifs,
    gifData,
    loading
  }
};

const mapDispatchToProps = (dispatch) => {
  const updateSearchValue = (value) => dispatch(homeOperations.updateSearchValue(value))
  const onFetchGif = (currentValue, weirdness) => dispatch(homeOperations.fetchGif(currentValue, weirdness))
  const changeWeirdness = (weirdness) => dispatch(homeOperations.changeWeirdness(weirdness))
  const likeGif = ({ gifData }) => dispatch(homeOperations.likeGif({ ...gifData }))
  const unlikeGif = (gifId) => dispatch(homeOperations.unlikeGif(gifId))
  const calculateWeirdness = (likedGifs) => dispatch(homeOperations.calculateWeirdness(likedGifs))

  return {
    onFetchGif,
    updateSearchValue,
    changeWeirdness,
    likeGif,
    unlikeGif,
    calculateWeirdness
  }
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent)

export default HomeContainer;