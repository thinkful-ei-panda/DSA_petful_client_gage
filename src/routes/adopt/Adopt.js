import React from 'react';

import Adoption from '../../components/adoption/Adoption'

import peopleApiCalls from '../../services/people/peopleAPICalls'
import petsApiCalls from '../../services/pets/petsApiCalls'

class Adopt extends React.Component{

    state = {
        error : null,
        regInput : '',
        cat : {},
        dog : {},
        peopleInQueue : [],
        type : ''
    }


    componentDidMount(){
        peopleApiCalls.getListOfPeopleInQueue()
        .then(persons =>{
            console.log(persons)
            this.setState({peopleInQueue : persons})
        })
        .catch(e => this.setState({error : e}));
        petsApiCalls.getNextPets()
        .then(pets => {
            console.log(pets)
            this.setState({
                cat : pets.cat,
                dog : pets.dog
            })
        })
        .catch(e => this.setState({error : e}))
    }
    componentWillUnmount(){
        this.setState({error : null})
    }


    handleRegistration = () => {
        peopleApiCalls.postNewUserIntoQueue(this.state.regInput)
        .catch(e=> this.setState({error : e }))
        this.setState({regInput : ''});
    }
    
    handleRegistrationInput = (ev)=> {
        ev.preventDefault();
        this.setState({regInput : ev.target.value})
    }

    handleAdoption = (ev) => {
        ev.preventDefault();
        petsApiCalls.removePetFromQueue({ type : ev.target.id})
    }

    handleQueueMovement = () =>{

    }

    render(){
        const {cat,dog,peopleInQueue} = this.state; 
        return(
            <div>
                <Adoption/>
            </div>
        )
    }
}
export default Adopt;