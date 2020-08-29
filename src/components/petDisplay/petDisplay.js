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
        handleAdoption : ()=>{},
    }

    render(){

        return(
            <div>
                <div className="pet-content">
                <div className="pet-content-column-left">
                    <img src={this.props.cat.imageURL} alt={this.props.cat.description}/>
                    <PetInfo
                    handleAdoption={this.props.handleAdoption}
                    type={'cat'}
                    cat={this.props.cat}
                    />
                </div>
                <div className="pet-content-column-right">
                    <img src={this.props.dog.imageURL} alt={this.props.dog.description}/>
                    <PetInfo
                    handleAdoption={this.props.handleAdoption}
                    type={'dog'}
                    dog={this.props.dog}
                    />
                </div>
                </div>
            </div>
        )
    }
} 