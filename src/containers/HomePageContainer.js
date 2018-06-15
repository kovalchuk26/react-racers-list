import {connect} from 'react-redux';
import HomePage from '../components/HomePage';

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    error: state.loadingError
});

export default connect(
    mapStateToProps,
    null
)(HomePage)


