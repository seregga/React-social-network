import React from "react";
import Users from "./Users";
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, setToggleFollowing, requestUsers } from './../../redux/users-reducer';
import Preloader from './../common/Preloader/Preloader';
import { compose } from "redux";
import {
    getCurrentPage,
    getPageSize,
    getToggleFollowing,
    getUsers,
    getTotalUsersCount,
    getIsFetching
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        const { currentPage, pageSize } = this.props
        this.props.requestUsers(currentPage, pageSize)

    }
    onPageChanged = (num) => {
        const { pageSize } = this.props
        this.props.requestUsers(num, pageSize)

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
                toggleFollowing={this.props.toggleFollowing} />
        </>)
    }
}

let mapStateToProps = (state) => {

    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        toggleFollowing: getToggleFollowing(state),
    }
}


export default compose(
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, setToggleFollowing, requestUsers })
)(UsersContainer)



