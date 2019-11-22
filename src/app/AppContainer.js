import { connect } from 'react-redux';
import AppComponent from './AppComponent';

import { appOperations } from './duck';

const mapStateToProps = (state) => {
    const { gifId, gifUrl, loading } = state.app;
    return {
        gifId,
        gifUrl,
        loading
    }
};

const mapDispatchToProps = (dispatch) => {
  const onFetchGif = () => dispatch(appOperations.fetchGif('party')) //need to change this to whatever user types in
  return {onFetchGif}
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppComponent)

export default AppContainer;