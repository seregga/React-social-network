import { connect } from 'react-redux';
import NavBar from './NavBar';

let mapStateToProps = (state) => {
    window.statesee = state
    return {
        sideBar: state.sideBar.navBarName
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return ''
// }

const NavBarContainer = connect(mapStateToProps)(NavBar)
export default NavBarContainer;