import React from 'react';
import PetInfo from '../petInfo/PetInfo';

export default class PetDisplay extends React.Component{

    static defaultProp = {
        petImage : null,
        petType : '',
        cat : {
            imageURL: '',
        },
        dog : {
            imageURL: '',
        },
        handleAdoption : ()=>{},
    }

    render(){

        return(
            <div className='pet_info_main'>
                <img src={this.props.cat.imageURL} alt={this.props.cat.name}/>
                <PetInfo
                handleAdoption={this.props.handleAdoption}
                type={'cat'}
                cat={this.props.cat}
                />
                <img src={this.props.dog.imageURL} alt={this.props.dog.name}/>
                <PetInfo
                handleAdoption={this.props.handleAdoption}
                type={'dog'}
                dog={this.props.dog}
                />
            </div>
        )
    }
} 