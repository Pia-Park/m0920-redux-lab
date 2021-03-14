const personReducer = (state=[], action) =>{
    
    if(action.type == "UPDATE_PERSON"){
        console.log("Update!")
        return action.payload.persons;
    }else if(action.type == "DELETE_PERSON"){
        return action.payload.persons;
    } else {
        return state;
    }
}
// const newPerson = {
//     id: Math.random(), // not really unique but good enough here!
//     name: 'INAE',
//     age: Math.floor( Math.random() * 40 )
// }

// const personReducer = (state = [], action) => {
//     switch (action.type) {
//         case UPDATE_PERSON:
//             return state.concat(action.paylod.newPerson);
//         case DELETE_PERSON:
//             return state.filter(person => person.id !== person.id)
//         default:
//           return state;
//       }
// };

export default personReducer;