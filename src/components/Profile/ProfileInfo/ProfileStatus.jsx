// import React from 'react';
// import s from './ProfileInfo.module.css'


// class ProfileStatus extends React.Component {
//     state = {
//         editMode: false,
//         status: this.props.status,
//         // test: console.log(this.props)
//     }
//     activateEditMode = () => {
//         this.setState({
//             editMode: true
//         })
//     }
//     deActivateEditMode = () => {
//         this.setState({
//             editMode: false
//         })
//         this.props.updateStatus(this.state.status)
//     }

//     onStatusChange = (e) => {
//         this.setState({
//             status: e.currentTarget.value
//         })
//     }
//     componentDidUpdate = (prevProps, prevState) => {
//         if (prevProps.status !== this.props.status) {
//             this.setState({
//                 status: this.props.status
//             })
//         }
//     }

//     render() {
//         return (
//             <div >
//                 {!this.state.editMode
//                     ? <div >
//                         <span className={s.profile__status} onClick={this.activateEditMode}>{this.props.status || 'No status'}</span>
//                         {/* <span onClick={this.activateEditMode.bind(this)}>{this.props.status || 'no status'}</span> */}
//                     </div>
//                     : <div >
//                         <input className={s.profile__status} onBlur={this.deActivateEditMode}
//                             // <input onBlur={this.deActivateEditMode.bind(this)}
//                             autoFocus={true} value={this.state.status}
//                             onChange={this.onStatusChange} />
//                     </div>
//                 }

//             </div>
//         )
//     }
// }

// export default ProfileStatus