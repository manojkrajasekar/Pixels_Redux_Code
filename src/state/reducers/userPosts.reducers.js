import { 
    GET_POSTS_BY_USER_PENDING,
    GET_POSTS_BY_USER_FULFILLED,
    GET_POSTS_BY_USER_REJECTED
} from '../../common/constants';

const postsByUserState = {
    fetching: false,
    fetched: false,
    error: null,
    Userposts: []
};

export const postsByUser = (state = postsByUserState, action) => {
    switch (action.type) {
        case GET_POSTS_BY_USER_PENDING:
            return { ...state, fetching: true};
        case GET_POSTS_BY_USER_FULFILLED:
            return { ...state, fetching: false, Userposts: action.payload.data.items };
        case GET_POSTS_BY_USER_REJECTED:
            return { ...state, fetching: false, error: action.payload.data.error };
        default:
            return state;
        }
};