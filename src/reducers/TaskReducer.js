const initialState = []

export const taskReducer = (state=initialState, action) =>{
    switch (action.type){
        case "ADD_TASK" : return [...state, action.playload]
        case "DELETE_TASK" : return state.filter((item)=> item!==action.playload)
        default:
            return state; 
    }
}