import {addRace} from "../actions";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {AdditionRace} from "../components/AdditionRace";


function mapDispatchToProps(dispatch) {
    return bindActionCreators({addRace}, dispatch)
}

// const mapDispatchToProps = dispatch => ({
//     addRace: (venue, serialNumber) => dispatch(addRace(venue, serialNumber))
// });

export default connect(
    null,
    mapDispatchToProps
)(AdditionRace)
