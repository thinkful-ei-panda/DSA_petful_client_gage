import React from 'react';

export default class PetInfo extends React.Component{

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