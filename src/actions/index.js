// action creator
import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPosts = async () => {
    const response = await jsonPlaceHolder.post('/posts');

    return {
        type: "FETCH_POSTS",
        payload: response
    };
};