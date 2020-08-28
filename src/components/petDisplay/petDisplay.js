import React from 'react';
import PetInfo from './components/PetInfo';

export default class PetDisplay extends React.Component{

    static defaultProp = {
        petImage =null,
        petType = '',
    }

    render(){

        return(
            <div className='pet_info_main'>
                <img src={this.props.petImage} alt={this.props.petType}/>
            </div>
        )
    }
} 