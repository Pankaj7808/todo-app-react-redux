export const addTask = (task)=>{
    return {
        type:'ADD_TASK',
        playload:task
    }
}

export const deleteTask = (task) =>{
    return {
        type:'DELETE_TASK',
        playload:task
    }
}

export const completeTask = (task)=>{
    return {
        type:'COMPLETE',
        payload:task
    }
}

export const undoCompleteTask = (task)=>{
    return {
        type:'UNDO_COMPLETE',
        payload:task
    }
}

export const completeAll = ()=>{
    return {
        type:'COMPLETE_ALL'
    }
}

export const getActive = ()=>{
    return {
        type:'ACTIVE'
    }
}


export const getCompleted = ()=>{
    return {
        type:'COMPLETE'
    }
}

export const clearCompleted = ()=>{
    return {
        type:'CLEAR_ALL'
    }
}