import React from 'react'; 

export default class AdoptButton extends React.Component {
   static defaultProps = {
        handleAdoption : ()=>{},
        type : '',
        handleQueueMovement : ()=>{},
    }

    componentDidMount =()=>{
        this.props.handleQueueMovement();
    }

    render(){

         return(
            <>
            <button onClick={this.props.handleAdoption} className='button' id={this.props.type}>Adopt Me</button>
            </>
        )
    }
       

        
    
}