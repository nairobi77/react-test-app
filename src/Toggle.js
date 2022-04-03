import React from "react"
import './Toggle.css';

export function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    )
}
export function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}

export class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false}
    }

    handleLoginClick = () => {
        this.setState({isLoggedIn: true})
    }

    handleLogoutClick = () => {
        this.setState({isLoggedIn: false})
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn

        return (
            <div className='Toggle'>
                {isLoggedIn ?
                    <LogoutButton onClick={this.handleLogoutClick}/> :
                    <LoginButton onClick={this.handleLoginClick}/>
                }
            </div>
        )
    }
}