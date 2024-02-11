const initialState = [];

export const completeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "COMPLETE":
            return [...state, action.payload]
        case "UNDO_COMPLETE":
            return state.filter((item)=>item!==action.payload)
        default:
            return state; 
    }
};
