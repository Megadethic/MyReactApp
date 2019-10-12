const initialState = {
    totalRemovedCharsCounter: 0
};

const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        state = {
            ...state,
            totalRemovedCharsCounter: state.totalRemovedCharsCounter + 1
        };

        console.log( action.value );
    }

    return state;
};

export default reducer;