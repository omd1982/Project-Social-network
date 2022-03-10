import { createSelector } from 'reselect';

const getUsersSelectorPrimitive = (state) => {
    return state.usersPage.users;
}
export const getUsersSelector = createSelector(getUsersSelectorPrimitive,
    (users) => {
        return users.filter(u => true);
    });

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getIfollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}

