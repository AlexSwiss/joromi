import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import { getEvents } from '../actions/eventActions';
import PropTypes from 'prop-types';


class EventList extends Component {

  componentDidMount() {
    this.props.getEvents()
  }

  render() {
    const { events } = this.props.event;

    return (
        <Container>
          <ListGroup>
            {events.map(({ id, name }) => (
              <ListGroupItem>
                  {name}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Container>
    );
  }
}

EventList.propTypes = {
  getEvents: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  event: state.event
});

export default connect(mapStateToProps, { getEvents } )(EventList);