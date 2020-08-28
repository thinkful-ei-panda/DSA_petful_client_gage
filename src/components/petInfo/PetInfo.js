import React from 'react';

export default class PetInfo extends React.Component{

    static defaultProp = {
        age : '',
        breed : '',
        description :'',
        gender :'',
        imageURL : '',
        name :'',
        story : '',
    }

    render(){

        return(
            <div className='pet_info_main'>
                <div className='img_wrapper'>
                    <img src={this.props.imageURL} className={`${this.props.name} an_img`} alt={`img of ${this.props.name}`}></img>
                </div>
                <div className='pet_text_info'>
                    <h6>Name:</h6> <span>{this.props.name}</span>
                    <h6>Gender:</h6> <span>{this.props.gender}</span>
                    <h6>Age:</h6> <span>{this.props.age}</span>
                    <h6>Breed:</h6> <span>{this.props.breed}</span>
                    <h6>{`${this.props.name}'s story:`}</h6> <span>{this.props.story}</span>
                    <h6>description :</h6> <span>{this.props.description}</span>
                </div>
            </div>
        )
    }
} 