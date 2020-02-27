import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

export default class Question extends Component {

    constructor(props) {
        super(props)
        this.state = {
            seconds: 30,
            message: ""
        }
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            if (this.state.seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            } if (this.state.seconds === 0) {
                this.setState({ message: "Time's up" })
                clearInterval(this.myInterval)
            }
        }, 1000)
    }

    render() {
        const question = this.props.question
        return (
            <div className="min-vh-100">
                <div className="m-4">
                    <div className="p-4 text-center">
                        <h1 className="display-4"><u>Your Question Is</u></h1>
                    </div>
                    <div className="p-4 text-center">
                        <div>
                            <h1 className="display-3">{this.state.seconds}</h1>
                            <h1 className="display-3 mt-2">{this.state.message}</h1>
                        </div>
                        <h1 className="display-2">{question}</h1>
                    </div>
                </div>
            </div>
        )
    }
}
