import React from 'react'

export default class ColorInput extends React.Component {

    static propTypes = {
        color: React.PropTypes.string,
        colorChanged: React.PropTypes.func.isRequired
    };

    render() {

        const { color, colorChanged } = this.props;

        return (
            <div>
                <label>What's your favorite color?</label>
                <input
                    type='text'
                    defaultValue={color}
                    onChange={colorChanged} />
            </div>
        )

    }

}