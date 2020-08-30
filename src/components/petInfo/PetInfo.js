import React from 'react';
import AdoptButton from '../adoptButton/AdoptButton'

export default class PetInfo extends React.Component{

    static defaultProp = {
        type : '',
        cat : {
            age : '',
            breed : '',
            description :'',
            gender :'',
            name :'',
            story : '',
            type : '',
        },
        dog : {
            age : '',
            breed : '',
            description :'',
            gender :'',
            name :'',
            story : '',
            type : '',
        },
        user : '', 
        peopleInQueue : [],
        handleQueueMovement : ()=>{},
        handleAdoption : () =>{}, 
    }

    
    
    render(){
        const {age,
              breed,
              gender,
              name,
              story} = this.props[this.props.type]
              let type = `${this.props.type}s`


        return(
            <div>

                <h4>Name:</h4> <span>{name}</span>
                <h4>Breed:</h4> <span>{breed}</span>
                <h4>Gender:</h4> <span>{gender}</span>
                <h4>Age:</h4> <span>{age}</span>
                <h4>{`${name}'s story:`}</h4> <span>{story}</span>
                <div>
                    {this.props.user && 
                    <AdoptButton
                    handleQueueMovement={this.props.handleQueueMovement}
                    type={type}
                    handleAdoption={this.props.handleAdoption}
                    />}  
                </div>
            </div>
        )
    }
} 