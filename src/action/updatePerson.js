
const updatePerson = (currentPerson, newPerson) => {
    return {
        type: "UPDATE_PERSON",
        payload: {
            persons: currentPerson.concat(newPerson),
        },
    };
};




export default updatePerson;
