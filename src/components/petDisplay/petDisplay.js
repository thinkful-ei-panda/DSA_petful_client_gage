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
                <div>
                    <img src={this.props.cat.imageURL} alt={this.props.cat.description}/>
                    <PetInfo
                    handleAdoption={this.props.handleAdoption}
                    type={'cat'}
                    cat={this.props.cat}
                    />
                    <img src={this.props.dog.imageURL} alt={this.props.dog.description}/>
                    <PetInfo
                    handleAdoption={this.props.handleAdoption}
                    type={'dog'}
                    dog={this.props.dog}
                    />
                </div>
            </div>
        )
    }
} 