export const checkboxHandler = (isChecked) => {
    return {
        type: 'CHECKBOX_HANDLER',
        payload: isChecked
    }
};
