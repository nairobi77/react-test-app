import React from 'react'

export class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    handleSubmit = (event) => {
        alert("You send " + this.state.value)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Имя:
                    <input type={"text"} value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type={"submit"} value={"Send"}/>
            </form>
        );
    }
}