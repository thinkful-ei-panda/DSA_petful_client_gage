import React from 'react';
import Introduction from '../../components/introduction/Introduction'

const Main = props =>{

    return(
        <div className='main_wrap'>
            <Introduction/>
            <button className='start_button'>let's get started</button>
        </div>
    )
}
export default Main;