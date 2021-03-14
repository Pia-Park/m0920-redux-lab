// const personReducer = (state=[], action) =>{
    
//     if(action.type == "UPDATE_PERSON"){
//         console.log("Update!")
//         return action.payload.persons;
//     }else if(action.type == "DELETE_PERSON"){
//         return action.payload.persons;
//     } else {
//         return state;
//     }
// }

const personReducer = (state=[], action) =>{
    
    if(action.type === "UPDATE_PERSON"){
        
        console.log("Update!")
        return state.concat(action.payload.newPerson);
    }else if(action.type === "DELETE_PERSON"){
        return state.filter((person) => person.id !== action.payload.personID);
    } else {
        return state;
    }
}



export default personReducer;