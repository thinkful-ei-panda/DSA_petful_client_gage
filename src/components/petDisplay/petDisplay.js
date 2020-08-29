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

                <div className="pet-content">
                <div className="pet-content-column-left">
                  <img src={this.props.cat.imageURL} alt={this.props.cat.description}/>
                  <PetInfo
                  handleQueueMovement={this.props.handleQueueMovement}
                  user={this.props.user}
                  handleAdoption={this.props.handleAdoption}
                  type={'cat'}
                  cat={this.props.cat}
                  />
                </div>
                <div className="pet-content-column-right">
                  <img src={this.props.dog.imageURL} alt={this.props.dog.description}/>
                  <PetInfo
                  user={this.props.user}
                  handleAdoption={this.props.handleAdoption}
                  type={'dog'}
                  dog={this.props.dog}
                  peopleInQueue={this.props.peopleInQueue}
                  />
                </div>
                </div>
            </div>
        )
    }
} 