import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

export default class Question extends Component {
    render() {
        return (
            <div className="min-vh-100">
                <div className="m-4">
                    <div className="p-4 text-center">
                        <h1 className="display-4"><u>Your Question Is</u></h1>
                    </div>
                    <div className="p-4 text-center">
                        <div>
                            <h1 className="displau-4 p-3">00:30</h1>
                        </div>
                        <h1 className="display-3">Question</h1>
                    </div>
                </div>
            </div>
        )
    }
}
