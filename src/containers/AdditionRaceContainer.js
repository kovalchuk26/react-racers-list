import {addRace} from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AdditionRace} from '../components/AdditionRace';

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addRace}, dispatch)
}

export default connect(
    null,
    mapDispatchToProps
)(AdditionRace)
