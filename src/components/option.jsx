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
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

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
const useStyles2 = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default class Option extends Component {
  render() {
    return (
      <div className="min-vh-100" id="optionsPage">
        <div id="option-container">
          <div id="optionTitle">
          </div>
          <Row id="rowSub">
            <div className="col-12 col-xs-12 col-sm-12 col-md-3 col-lg-3 text-center">
              <Card className={useStyles.root}>
                <CardContent className="text-wrap">
                  <h5>Mathematics</h5>
                </CardContent>
              </Card>
            </div>
            <div className="col-12 col-xs-12 col-sm-12 col-md-3 col-lg-3 text-center">
              <Card className={useStyles.root}>
                <CardContent className="text-wrap">
                  <h5>Science</h5>
                </CardContent>
              </Card>            </div>
            <div className="col-12 col-xs-12 col-sm-12 col-md-3 col-lg-3 text-center">
              <Card className={useStyles.root}>
                <CardContent className="text-wrap">
                  <h5>General</h5>
                </CardContent>
              </Card>            </div>
          </Row>
          <Row id="row1">
            <div className="col-12 col-xs-12 col-sm-12 col-md-3 col-lg-3" >
              <Card className={useStyles.root} id="mark1-a">
                <CardContent>
                  <Typography className={useStyles.title} color="textSecondary" gutterBottom>
                    Easy
                  </Typography>
                  <Typography variant="h5" component="h2">
                    Mark 1
                  </Typography>
                  <Typography variant="body2" component="p">
                    Mathematics
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Proceed</Button>
                </CardActions>
              </Card>
            </div>
            <div className="col-12 col-xs-12 col-sm-12 col-md-3 col-lg-3">
              <Card className={useStyles.root} id="mark1-b">
                <CardContent>
                  <Typography className={useStyles.title} color="textSecondary" gutterBottom>
                    Easy
                  </Typography>
                  <Typography variant="h5" component="h2">
                    Mark 1
                  </Typography>
                  <Typography variant="body2" component="p">
                    Science
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Proceed</Button>
                </CardActions>
              </Card>
            </div>
            <div className="col-12 col-xs-12 col-sm-12 col-md-3 col-lg-3">
              <Card className={useStyles.root} id="mark1-c">
                <CardContent>
                  <Typography className={useStyles.title} color="textSecondary" gutterBottom>
                    Easy
                  </Typography>
                  <Typography variant="h5" component="h2">
                    Mark 1
                  </Typography>
                  <Typography variant="body2" component="p">
                    General
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Proceed</Button>
                </CardActions>
              </Card>
            </div>
          </Row>
          <Row id="row2">
            <div className="col-12 col-xs-12 col-sm-12 col-md-3 col-lg-3"> 
            <Card className={useStyles.root} id="mark2-a">
              <CardContent>
                <Typography className={useStyles.title} color="textSecondary" gutterBottom>
                  Normal
                  </Typography>
                <Typography variant="h5" component="h2">
                  Mark 2
                  </Typography>
                <Typography variant="body2" component="p">
                  Mathematics
                  </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Proceed</Button>
              </CardActions>
            </Card>
            </div>
            <div className="col-12 col-xs-12 col-sm-12 col-md-3 col-lg-3" >
              <Card className={useStyles.root} id="mark2-b">
                <CardContent>
                  <Typography className={useStyles.title} color="textSecondary" gutterBottom>
                    Normal
                  </Typography>
                  <Typography variant="h5" component="h2">
                    Mark 2
                  </Typography>
                  <Typography variant="body2" component="p">
                    Science
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Proceed</Button>
                </CardActions>
              </Card>
            </div>
            <div className="col-12 col-xs-12 col-sm-12 col-md-3 col-lg-3">
              <Card className={useStyles.root} id="mark2-c">
                <CardContent>
                  <Typography className={useStyles.title} color="textSecondary" gutterBottom>
                    Normal
                  </Typography>
                  <Typography variant="h5" component="h2">
                    Mark 2
                  </Typography>
                  <Typography variant="body2" component="p">
                    General
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Proceed</Button>
                </CardActions>
              </Card>
            </div>
          </Row>
          <Row id="row3">
            <div className="col-12 col-xs-12 col-sm-12 col-md-3 col-lg-3" >
              <Card className={useStyles.root} id="mark3-a" >
                <CardContent>
                  <Typography className={useStyles.title} color="textSecondary" gutterBottom>
                    Hard
                  </Typography>
                  <Typography variant="h5" component="h2">
                    Mark 3
                  </Typography>
                  <Typography variant="body2" component="p">
                    Mathematics
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Proceed</Button>
                </CardActions>
              </Card>
            </div>
            <div className="col-12 col-xs-12 col-sm-12 col-md-3 col-lg-3" >
              <Card className={useStyles.root} id="mark3-b">
                <CardContent>
                  <Typography className={useStyles.title} color="textSecondary" gutterBottom>
                    Hard
                  </Typography>
                  <Typography variant="h5" component="h2">
                    Mark 3
                  </Typography>
                  <Typography variant="body2" component="p">
                    Science
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Proceed</Button>
                </CardActions>
              </Card>
            </div>
            <div className="col-12 col-xs-12 col-sm-12 col-md-3 col-lg-3"> 
            <Card className={useStyles.root} id="mark3-c">
              <CardContent>
                <Typography className={useStyles.title} color="textSecondary" gutterBottom>
                  Hard
                  </Typography>
                <Typography variant="h5" component="h2">
                  Mark 3
                  </Typography>
                <Typography variant="body2" component="p">
                  General
                  </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Proceed</Button>
              </CardActions>
            </Card>
            </div>
          </Row>
        </div>
        <div id="scoreContainer">
          <div id="scoreTitle">
            <h1 className="display-4"><u>Scores</u></h1>
          </div>
          <div id="team">
            <List className={useStyles2.root}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary="Team 1"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={useStyles2.inline}
                        color="textPrimary"
                      >
                        Score:
              </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary="Team 2"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={useStyles2.inline}
                        color="textPrimary"
                      >
                        Score:
              </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary="Team 3"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={useStyles2.inline}
                        color="textPrimary"
                      >
                        Score:
              </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </div>

        </div>
      </div>
    )
  }
}
