import React from 'react'

export default class NameInput extends React.Component {

    static propTypes = {
        name: React.PropTypes.string,
        nameChanged: React.PropTypes.func.isRequired
    };

    render() {

        const { name, nameChanged } = this.props;

        return (
            <div>
                <label>What's your name</label>
                <input type='text' onChange={nameChanged} defaultValue={name} />
            </div>
        )
    }

}



//import
//create class
//set proptypes
//  constructor if changing state
