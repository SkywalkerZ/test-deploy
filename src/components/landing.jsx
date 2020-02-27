import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Row from "react-bootstrap/Row";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style/main.css";

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
            <div className="min-vh-100" id="mainPage">
                <div id="main-container">
                    <div id="mainTitle">
                        <h1 className="p-3 display-2"><u>National Science Day</u></h1>
                        <h1 className="m-2 display-4"><u>Science Quiz</u></h1>
                    </div>
                    <Row id="row1-main">
                        <div className="col-6 col-xs-6 col-sm-6 col-md-2 col-lg-2 mr-1" id="batch1a">
                            <Card className={useStyles.root}>
                                <CardContent>
                                    <Typography className={useStyles.title} color="textSecondary" gutterBottom>
                                        Time
                  </Typography>
                                    <Typography variant="h5" component="h2">
                                        <Button size="small">Batch 1A</Button>
                  </Typography>

                                </CardContent>
                            </Card>
                        </div>
                        <div className="col-6 col-xs-6 col-sm-6 col-md-2 col-lg-2" id="batch1b">
                            <Card className={useStyles.root}>
                                <CardContent>
                                    <Typography className={useStyles.title} color="textSecondary" gutterBottom>
                                        Time
                  </Typography>
                                    <Typography variant="h5" component="h2">
                                    <Button size="small">Batch 1B</Button>
                  </Typography>

                                </CardContent>
                            </Card>
                        </div>
                        <div className="col-6 col-xs-6 col-sm-6 col-md-2 col-lg-2" id="batch2">
                            <Card className={useStyles.root}>
                                <CardContent>
                                    <Typography className={useStyles.title} color="textSecondary" gutterBottom>
                                        Time
                  </Typography>
                                    <Typography variant="h5" component="h2">
                                    <Button size="small"> Batch 2</Button>
                  </Typography>

                                </CardContent>
                            </Card>
                        </div>
                    </Row>
                    <Row id="row2-main">
                    <div className="col-6 col-xs-6 col-sm-6 col-md-2 col-lg-2" id="batch3">
                    <Card className={useStyles.root}>
                        <CardContent>
                            <Typography className={useStyles.title} color="textSecondary" gutterBottom>
                                Time
          </Typography>
                            <Typography variant="h5" component="h2">
                            <Button size="small"> Batch 3</Button>
          </Typography>

                        </CardContent>
                    </Card>
                </div>
                        <div className="col-6 col-xs-6 col-sm-6 col-md-2 col-lg-2" id="batch4">
                            <Card className={useStyles.root}>
                                <CardContent>
                                    <Typography className={useStyles.title} color="textSecondary" gutterBottom>
                                        Time
                  </Typography>
                                    <Typography variant="h5" component="h2">
                                    <Button size="small">Batch 4</Button>
                  </Typography>

                                </CardContent>
                            </Card>
                        </div>
                        <div className="col-6 col-xs-6 col-sm-6 col-md-2 col-lg-2" id="batch5">
                            <Card className={useStyles.root}>
                                <CardContent>
                                    <Typography className={useStyles.title} color="textSecondary" gutterBottom>
                                        Time
                  </Typography>
                                    <Typography variant="h5" component="h2">
                                    <Button size="small"> Batch 5</Button>
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
