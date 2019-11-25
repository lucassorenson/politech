import { connect } from 'react-redux';
import ResultsComponent from './ResultsComponent';
import { homeOperations } from '../duck';



const mapStateToProps = (state) => {
    const { likedGifs, totalWeirdnessScore } = state.home;
    return {
        likedGifs,
        totalWeirdnessScore
    }
};

const mapDispatchToProps = (dispatch) => {
    const startOver = () => dispatch(homeOperations.startOver())
    return {
        startOver
    };
}

const ResultsContainer = connect(mapStateToProps, mapDispatchToProps)(ResultsComponent)

export default ResultsContainer;