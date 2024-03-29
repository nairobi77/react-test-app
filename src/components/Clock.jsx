import React from "react"
import {FormattedDate} from "./FormattedDate";

export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    tick() {
        this.setState(
            {date: new Date()}
        )
    }

    render() {
        return (
            <div>
                <FormattedDate date={this.state.date}/>
            </div>
        )
    }
}