import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    static proptTypes = {
        name: React.PropTypes.string,
        color: React.PropTypes.string
    };
    constructor(props) {
        super(props)

        let { name, color } = props
        this.state = { name, color }
    };

    updateName = (ev) => {
        let { value } = ev.target

        if (value.length === 0) {
            value = this.props.name
        }

        this.setState({ name: value })
    };

    updateColor = (ev) => {
        let { value } = ev.target

        if (value.length === 0) {
            value = this.props.color
        }

        this.setState({ color: value })
    };

    render() {
        const { name, color } = this.state

        return (
            <div className='container' style={{ color }}>
                <label>What's your name</label>
                <input type='text' onChange={this.updateName} defaultValue={name} />
                <label>What's your favorite color?</label>
                <input type='text' defaultValue={color} onChange={this.updateColor} />
                <p>Your name is {name}</p>
            </div>
        )
    }
}

ReactDOM.render(<App name='Fred' color='red' />, document.getElementById('react'))