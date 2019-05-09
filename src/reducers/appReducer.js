const appReducer = (state = {
    data: null
}, action) => {
    switch (action.type) {
        case 'FETCH_DATA_FULFILLED':
            state = {
                ...state,
                data: action.payload
            };
            break;
        default:
            break;
    }
    return state;
};

export default appReducer;

