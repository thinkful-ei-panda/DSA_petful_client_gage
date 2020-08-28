import React from 'react';
import { Link } from 'react-router-dom'

const Introduction = (props) =>{

    return (
        <div className='content-center'>
            <h2>Welcome to Petful</h2>
            <p className="intro-message">No one cares about pets like we do. All of our staff suffer chronic depression from seeing so many pets that we've fallen in love with leave us. We Know they're going to a good home, but that doesn't mean that it doesn't hurt to watch them go.</p>
            <Link to='/adoption'>
                <button className='button'>Adopt a Pet</button>
            </Link>
        </div>
    )
}

export default Introduction;