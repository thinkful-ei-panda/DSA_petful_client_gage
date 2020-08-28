import React from 'react';

import Adoption from '../../components/adoption/Adoption'

import peopleApiCalls from '../../services/people/peopleAPICalls'
import petsApiCalls from '../../services/pets/petsApiCalls'

class Adopt extends React.Component{

    state = {
        error : null,
        regInput : '',
        cats : {},
        dogs : {},
        peopleInQueue : [],
    }


    componentDidMount(){
        peopleApiCalls.getListOfPeopleInQueue()
        .then(persons =>{
            this.setState({peopleInQueue : persons})
        })
        .catch(e => this.setState({error : e}));
        petsApiCalls.getNextPets()
        .then(pets => {
            this.setState({
                cat : pets.cats,
                dog : pets.dogs
            })
        })
        .catch(e => this.setState({error : e}))
    }
    componentWillUnmount(){
        this.setState({error : null})
    }


    handleRegistration = (ev) => {

    }

    handleAdoption = (ev) => {

    }

    handleQueueMovement = () =>{

    }

    render(){

        return(
            <div>
                <Adoption/>
            </div>
        )
    }
}
export default Adopt;