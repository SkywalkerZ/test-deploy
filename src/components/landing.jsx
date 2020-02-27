import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Row from "react-bootstrap/Row";
import Typography from '@material-ui/core/Typography';

import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style/option.css";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default class Landing extends Component {
    render() {
        return (
            <div className="min-vh-100" id="optionsPage">
                <div id="option-container">
                    <div id="optionTitle">
                        <h1 className="m-3">National Science Day</h1>
                        <h2 className="m-2">Science Quiz</h2>
                    </div>
                    <Row id="row1">
                        <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6" id="batch1a">
                            <Card className={useStyles.root}>
                                <CardContent>
                                    <Typography className={useStyles.title} color="textSecondary" gutterBottom>
                                        Time
                  </Typography>
                                    <Typography variant="h5" component="h2">
                                        Batch 1A
                  </Typography>

                                </CardContent>
                            </Card>
                        </div>
                        <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6" id="batch1b">
                            <Card className={useStyles.root}>
                                <CardContent>
                                    <Typography className={useStyles.title} color="textSecondary" gutterBottom>
                                        Time
                  </Typography>
                                    <Typography variant="h5" component="h2">
                                        Batch 1B
                  </Typography>

                                </CardContent>
                            </Card>
                        </div>
                    </Row>
                    <Row id="row2">
                        <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6" id="batch2">
                            <Card className={useStyles.root}>
                                <CardContent>
                                    <Typography className={useStyles.title} color="textSecondary" gutterBottom>
                                        Time
                  </Typography>
                                    <Typography variant="h5" component="h2">
                                        Batch 2
                  </Typography>

                                </CardContent>
                            </Card>
                        </div>
                        <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6" id="batch3">
                            <Card className={useStyles.root}>
                                <CardContent>
                                    <Typography className={useStyles.title} color="textSecondary" gutterBottom>
                                        Time
                  </Typography>
                                    <Typography variant="h5" component="h2">
                                        Batch 3
                  </Typography>

                                </CardContent>
                            </Card>
                        </div>
                    </Row>
                    <Row id="row3">
                        <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6" id="batch4">
                            <Card className={useStyles.root}>
                                <CardContent>
                                    <Typography className={useStyles.title} color="textSecondary" gutterBottom>
                                        Time
                  </Typography>
                                    <Typography variant="h5" component="h2">
                                        Batch 4
                  </Typography>

                                </CardContent>
                            </Card>
                        </div>
                        <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6" id="batch5">
                            <Card className={useStyles.root}>
                                <CardContent>
                                    <Typography className={useStyles.title} color="textSecondary" gutterBottom>
                                        Time
                  </Typography>
                                    <Typography variant="h5" component="h2">
                                        Batch 5
                  </Typography>

                                </CardContent>
                            </Card>
                        </div>
                    </Row>
                </div>
            </div>
        )
    }
}
