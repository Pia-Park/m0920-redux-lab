const deletePerson = (currentPerson, personID) => {
    return {
        type: "DELETE_PERSON",
        payload: {
            
            currentPerson, personID
        }
    }
}



// const deletePerson = (currentPerson, personID) => {
//     return {
//         type: "DELETE_PERSON",
//         payload: {
//             persons: currentPerson.filter((person) => person.id !== personID), 
//             personID},
//     }
// }

export default deletePerson;
