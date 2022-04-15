import React from "react";

export class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value:'coconut'
        }
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert('Chosen ' + this.state.value)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Please make you chose:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value='grape'>grape</option>
                        <option value='lime'>lime</option>
                        <option value='coconut'>coconut</option>
                        <option value='mango'>mango</option>
                    </select>
                </label>
                <inout type='submit' value='Send'/>
            </form>
        )
    }
}