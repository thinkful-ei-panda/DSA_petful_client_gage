import React from 'react';

export default class PetInfo extends React.Component{

    static defaultProp = {
        petName ='',
        petGender = '',
        petAge ='',
        petBreed ='',
        petStory ='',
    }


    render(){


        return(
            <div className='pet_info_main'>
                <h6>Name:</h6> <span>{this.props.petName}</span>
                <h6>Gender:</h6> <span>{this.props.petGender}</span>
                <h6>Age:</h6> <span>{this.props.petAge}</span>
                <h6>Breed:</h6> <span>{this.props.petBreed}</span>
                <h6>Fluffly's story:</h6> <span>{this.props.petStory}</span>
            </div>
        )
    }
} 