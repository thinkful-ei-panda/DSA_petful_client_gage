import React from 'react';

import PeopleInfo from '../peopleInfo/PeopleInfo'

export default class PeopleDisplay extends React.Component{

    static defaultProps = {
        people : [],
    }

    render() {

        return (
            <div>
                <PeopleInfo />
            </div>
        )

    }

}