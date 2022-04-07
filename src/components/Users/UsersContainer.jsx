import React from "react";
import Users from "./Users";
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, setToggleFollowing, getUsers } from './../../redux/users-reducer';
import Preloader from './../common/Preloader/Preloader';
import { compose } from "redux";

class UsersContainer extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        // this.props.toggleIsFetching(true)

        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items)
        //     this.props.setTotalUsersCount(data.totalCount)
        // })
    }
    onPageChanged = (num) => {
        this.props.getUsers(num, this.props.pageSize)

        // this.props.toggleIsFetching(true)
        // this.props.setCurrentPage(num)
        // usersAPI.getUsers(num, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items)
        // })

    }
    render() {
        return (<>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleFollowing={this.props.toggleFollowing}
            // setToggleFollowing={this.props.setToggleFollowing}
            />
        </>)
    }
}

let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        toggleFollowing: state.usersPage.toggleFollowing,
    }
}

export default compose(
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, setToggleFollowing, getUsers })
)(UsersContainer)
// export default connect(mapStateToProps, { follow, unfollow, setCurrentPage, setToggleFollowing, getUsers })(UsersContainer);



// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (count) => {
//             dispatch(setTotalUsersCountAC(count))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }


