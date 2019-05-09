const settingsReducer = (state = {
    isChecked: false
}, action) => {
    switch (action.type) {
        case 'CHECKBOX_HANDLER':
            state = {
                ...state,
                isChecked: !action.payload
            };
            break;
        default:
            break;
    }
    return state;
};

export default settingsReducer;

