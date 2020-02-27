import React, { Component } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style/option.css";

export default class Option extends Component {
    render() {
        return (
            <div className="min-vh-100" id="optionsPage">
                <div id="option-container">
                <Row>
                <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4" id="mark1-a">1</div>
                <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4" id="mark1-b">2</div>
                <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4" id="mark1-c">3</div>
                </Row>
                <Row>
                <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4" id="mark2-a">1</div>
                <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4" id="mark2-b">2</div>
                <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4" id="mark2-c">3</div>
                </Row>
                <Row>
                <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4" id="mark3-a">1</div>
                <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4" id="mark3-b">2</div>
                <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4" id="mark3-c">3</div>
                </Row>
                </div>
            </div>
        )
    }
}
