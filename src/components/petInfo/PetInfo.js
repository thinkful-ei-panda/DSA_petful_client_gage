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
            <div className='pet-container'>
                <div className='content-item'>
                    <h4>Gender:</h4> <span>{gender}</span>
                    <h4>Name:</h4> <span>{name}</span>
                    <h4>Age:</h4> <span>{age}</span>
                    <h4>Breed:</h4> <span>{breed}</span>
                    <h4>{`${name}'s story:`}</h4> <span>{story}</span>
                    <h4>Description :</h4> <span>{description}</span>
                <button onClick={this.props.handleAdoption} className='button' id={this.props.type}>Adopt Me</button>
                </div>
            </div>
        )
    }
} 