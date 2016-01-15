import React from 'react'
import ReactDOM from 'react-dom'
import NameInput from './nameInput'
import ColorInput from './colorInput'
import FontSize from './fontSize'

class App extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
        color: React.PropTypes.string,
        fontSize: React.PropTypes.number
    };

    static defaultProps = {
        name: 'Fred',
        color: 'red',
        fontSize: 12
    };
    constructor(props) {
        super(props);

        let { name, color, fontSize } = props;
        this.state = { name, color, fontSize }
    }

    updateName = (ev) => {
        let { value } = ev.target;

        if (value.length === 0) {
            value = this.props.name
        }

        this.setState({ name: value })
    };

    updateColor = (ev) => {
        let { value } = ev.target;

        if (value.length === 0) {
            value = this.props.color
        }

        this.setState({ color: value })
    };

    updateSize = (ev) => {
        let { value } = ev.target;

        if (value.length === 0) {
            value = this.props.fontSize
        }

        this.setState({ fontSize: value })
    };

    render() {
        const { name, color, fontSize } = this.state

        return (
            <div className='container' style={{ color, fontSize }}>
                <NameInput name={name} nameChanged={this.updateName}></NameInput>
                <p>Your name is {name}</p>
                <ColorInput color={color} colorChanged={this.updateColor}></ColorInput>
                <FontSize fontSize={fontSize} sizeChanged={this.updateSize} ></FontSize>
            </div>
        )
    }
}

ReactDOM.render(<App name="Arturo" />, document.getElementById('react'))