export const movieReducer = (state, action) => {
    switch (action.type) {
        case 'MOVIE_FETCH':
            return { ...action.payload };
        case 'COMMENT_ADD':
            return {
                ...state,
                comments: [
                    ...state.comments,
                    {
                        ...action.payload,
                        author: {
                            email: action.payload.email
                        }
                    }
                ],
            }
        default:
            return state;
    };
};