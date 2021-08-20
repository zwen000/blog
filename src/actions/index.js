// action creator
import jsonPlaceHolder from "../apis/jsonPlaceHolder";
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {

    await dispatch(fetchPosts());
    const userIds = _.uniq(_.map(getState().posts, 'userId') );

    userIds.forEach(id => dispatch(fetchUser(id)) );

    // _.chain(getState().posts)
    // .map('userId')
    // .uniq()
    // .forEach(id => dispatch(fetchUser(id)))
    // .value();
};

export const fetchPosts = () => {

    return async (dispatch, getState) => {
        const response = await jsonPlaceHolder.get('/posts');

        dispatch({ type:'FETCH_POSTS', payload:response.data });
    };
};


export const fetchUser = (id) => {

    return async (dispatch) => {
        const response = await jsonPlaceHolder.get(`/users/${id}`);

        dispatch({ type:'FETCH_USER', payload:response.data });
    };
};


// export const fetchUser = (id) => (dispatch) => 
//     _fetchUser(id, dispatch);


// const _fetchUser = _.memoize( async (id, dispatch) => {
//     const response = await jsonPlaceHolder.get(`/users/${id}`);

//     dispatch({ type:'FETCH_USER', payload:response.data });
// });