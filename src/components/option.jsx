import React, { Component } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style/option.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  

export default class Option extends Component {
    render() {
        return (
            <div className="min-vh-100" id="optionsPage">
                <div id="option-container">
                <div id="optionTitle"><h3>Options</h3></div>
                <Row id="row1">
                <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4" id="mark1-a">
                <Card className={useStyles.root}>
                <CardContent>
                  <Typography className={useStyles.title} color="textSecondary" gutterBottom>
                    Easy
                  </Typography>
                  <Typography variant="h5" component="h2">
                    Mark 1
                  </Typography>
                  <Typography variant="body2" component="p">
                       This is fun!
                  </Typography>
                </CardContent>
              </Card>
              </div>
                <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4" id="mark1-b">
                <Card className={useStyles.root}>
                <CardContent>
                  <Typography className={useStyles.title} color="textSecondary" gutterBottom>
                    Easy
                  </Typography>
                  <Typography variant="h5" component="h2">
                    Mark 1
                  </Typography>
                  <Typography variant="body2" component="p">
                       This is fun!
                  </Typography>
                </CardContent>
              </Card>
                </div>
                <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4" id="mark1-c">
                <Card className={useStyles.root}>
                <CardContent>
                  <Typography className={useStyles.title} color="textSecondary" gutterBottom>
                    Easy
                  </Typography>
                  <Typography variant="h5" component="h2">
                    Mark 1
                  </Typography>
                  <Typography variant="body2" component="p">
                       This is fun!
                  </Typography>
                </CardContent>
              </Card>
                </div>
                </Row>
                <Row id="row2">
                <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4" id="mark2-a"> <Card className={useStyles.root}>
                <CardContent>
                  <Typography className={useStyles.title} color="textSecondary" gutterBottom>
                    Normal
                  </Typography>
                  <Typography variant="h5" component="h2">
                    Mark 2
                  </Typography>
                  <Typography variant="body2" component="p">
                       This is fun!
                  </Typography>
                </CardContent>
              </Card>
              </div>
                <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4" id="mark2-b"> 
                <Card className={useStyles.root}>
                <CardContent>
                  <Typography className={useStyles.title} color="textSecondary" gutterBottom>
                  Normal
                  </Typography>
                  <Typography variant="h5" component="h2">
                    Mark 2
                  </Typography>
                  <Typography variant="body2" component="p">
                       This is fun!
                  </Typography>
                </CardContent>
              </Card>
                </div>
                <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4" id="mark2-c">
                <Card className={useStyles.root}>
                <CardContent>
                  <Typography className={useStyles.title} color="textSecondary" gutterBottom>
                  Normal
                  </Typography>
                  <Typography variant="h5" component="h2">
                    Mark 2
                  </Typography>
                  <Typography variant="body2" component="p">
                       This is fun!
                  </Typography>
                </CardContent>
              </Card>
                </div>
                </Row>
                <Row id="row3">
                <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4" id="mark3-a"> 
                <Card className={useStyles.root}>
                <CardContent>
                  <Typography className={useStyles.title} color="textSecondary" gutterBottom>
                    Hard
                  </Typography>
                  <Typography variant="h5" component="h2">
                    Mark 3
                  </Typography>
                  <Typography variant="body2" component="p">
                       This is fun!
                  </Typography>
                </CardContent>
              </Card>
              </div>
                <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4" id="mark3-b"> 
                <Card className={useStyles.root}>
                <CardContent>
                  <Typography className={useStyles.title} color="textSecondary" gutterBottom>
                    Hard
                  </Typography>
                  <Typography variant="h5" component="h2">
                    Mark 3
                  </Typography>
                  <Typography variant="body2" component="p">
                       This is fun!
                  </Typography>
                </CardContent>
              </Card>
              </div>
                <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4" id="mark3-c"> <Card className={useStyles.root}>
                <CardContent>
                  <Typography className={useStyles.title} color="textSecondary" gutterBottom>
                    Hard
                  </Typography>
                  <Typography variant="h5" component="h2">
                    Mark 3
                  </Typography>
                  <Typography variant="body2" component="p">
                       This is fun!
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
