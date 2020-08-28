import React from 'react';

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
        handleAdoption : () =>{}, 
    }

    render(){
        const {age,
              breed,
              description,
              gender,
              name,
              story } = this.props[this.props.type]
        return(
            <div className='pet_info_main'>
                <div className='pet_text_info'>
                    <h6>Name:</h6> <span>{name}</span>
                    <h6>Gender:</h6> <span>{gender}</span>
                    <h6>Age:</h6> <span>{age}</span>
                    <h6>Breed:</h6> <span>{breed}</span>
                    <h6>{`${name}'s story:`}</h6> <span>{story}</span>
                    <h6>description :</h6> <span>{description}</span>
                </div>
                <button onClick={this.props.handleAdoption} className='adopt_pet' id={this.props.type}></button>
            </div>
        )
    }
} 