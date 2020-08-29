import React from 'react';

export default class PeopleInfo extends React.Component{

    static defaultProps = {
        people : [],
    }


    render() {

        return (
            <div>
                {this.props.people.map((person,i) => <p key={i}>{person}</p>)}
            </div>
        )

    }

}