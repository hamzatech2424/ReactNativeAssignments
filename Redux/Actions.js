export const AddTask = (  tasktoPerform,id) => {
        

    return {
        type:"ADD_TASK",
        payload:{
            tasks:tasktoPerform,
            autoIncreid:id, 
        }
    }
}





export const DeleteTask = (dataId) => {

    return{
        type: "DELETE_TASK",
        payload:{
            idOfTask:dataId,
            
        }
    }

}



export const increasePersons = (dataId) => {
    return {
        type: "INCREASE_PERSONS",
        payload: {
            idTask:dataId,
        }
    }
}


export const decreasePersons = (dataId) => {
    return {
        type: "DECREASE_PERSONS",
        payload: {
            Taskid:dataId,
        }
    }
}



export const ResetPersons = () => {
    return {
        type: "RESET_PERSONS",
        // payload: {
        //     TaskKiId:dataId

        // }
    }
}



export const EditTask = (dataId,valued) => {
    return {
        type: "EDIT_TASK",
        payload: {
            TaskKiId:dataId,
            // newValueEdited:valued

        }
    }
}


export const AfterEditSaveTask = (dataId,valued) => {
    return {
        type: "EDIT_TASK_SAVE_TASK",
        payload: {
            TaskKiIdhai:dataId,
            newValueEdited:valued

        }
    }
}




// export const LocationAddKrni = (  fromdata,id) => {
        
//  console.log(fromdata,id,"actionssay")

//     return {
//         type:"ADD_LOCATION",
//         payload:{
//             dataAgya:fromdata,
//             autoIncreid:id, 
//         }
//     }
// }















