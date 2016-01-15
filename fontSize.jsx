import React from 'react'

export default class FontSize extends React.Component {

    static propTypes = {
        size: React.PropTypes.number,
        sizeChanged: React.PropTypes.func.isRequired
    };

    render() {

        const { size, sizeChanged } = this.props;

        return (
            <div>
                <label>Type a font size</label>
                <input
                    type="number"
                    defaultValue={size}
                    onChange={sizeChanged} />
            </div>
        )

    }

}