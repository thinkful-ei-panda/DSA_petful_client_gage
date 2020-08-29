import React from 'react';
import PetInfo from '../petInfo/PetInfo';

export default class PetDisplay extends React.Component{

    static defaultProp = {
        petImage : null,
        petType : '',
        cat : {
            imageURL: '',
            description: ''
        },
        dog : {
            imageURL: '',
            description: ''
        },
        user : '',
        peopleInQueue : [],
        handleQueueMovement : ()=>{},
        handleAdoption : ()=>{},
    }

    render(){

        return(
            <div>
                <img src={this.props.cat.imageURL} alt={this.props.cat.description}/>
                <PetInfo
                handleQueueMovement={this.props.handleQueueMovement}
                user={this.props.user}
                handleAdoption={this.props.handleAdoption}
                type={'cat'}
                cat={this.props.cat}
                />
                <img src={this.props.dog.imageURL} alt={this.props.dog.description}/>
                <PetInfo
                user={this.props.user}
                handleAdoption={this.props.handleAdoption}
                type={'dog'}
                dog={this.props.dog}
                peopleInQueue={this.props.peopleInQueue}
                />
            </div>
        )
    }
} 