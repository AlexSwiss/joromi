import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import uuid from 'uuid';


class RecipeReviewCard extends Component {

  state = {
    events: [
                {id: uuid(), name: 'Youth Fest', venue: 'Gonin gora', price: '3000'},
                {id: uuid(), name: 'Musical Concert', venue: 'Space 3000', price: '50000'}
            ]
    }

  render() {
    const { classes } = this.props;
    const { events } = this.state

    return (

      <div className="row">
      
       { events.map(({ id, name, venue, price}) => (
      
      <Card className={classes.card}>

        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          
          title={name}
          subheader="August 14, 2019"
          key={id}
          timeout={500}
        />
        <CardMedia
          className={classes.media}
          style = {{ height: 0, paddingTop: '56%'}}
          image={require('../images/cards/devfest.jpg')}
          title="Google devfest"
        ></CardMedia>
        <CardContent>
          <Typography component="p">
            {venue}
          </Typography>
        </CardContent>

      </Card>
      ))}
      </div>
    );
  }
}

const styles = theme => ({

  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});


RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
