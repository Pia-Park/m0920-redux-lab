import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import updatePerson from '../action/updatePerson';
import deletePerson from '../action/deletePerson';

class Persons extends Component {




    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'INAE',
            age: Math.floor( Math.random() * 40 )
        }
        this.props.updatePerson(this.props.data, newPerson)
    }

    personDeletedHandler = (personId) => {
        this.props.deletePerson(this.props.data, personId)
    }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.personAddedHandler} />
                {this.props.data.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.personDeletedHandler(person.id)}/>
                ))}
                
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        data: state.persons,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updatePerson: updatePerson,
        deletePerson: deletePerson,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);