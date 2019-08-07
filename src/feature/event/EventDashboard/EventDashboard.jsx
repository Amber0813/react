import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import {connect} from "react-redux";
import EventList from "../EventList/EventList";
import {createEvent, updateEvent, deleteEvent} from '../eventActions';

const mapState = (state) => ({
  events: state.events 
})

const actions = {
  createEvent,
  updateEvent,
  deleteEvent 
};
 
class EventDashboard extends Component {

  

  handleDeleteEvent = (id) => {
    this.props.deleteEvent(id);
  }
    render() {
      const {events} = this.props;
        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList events={events} 
                    deleteEvent={this.handleDeleteEvent}
                      ></EventList>
                    {/* <h2>Left Column</h2> */}
                </Grid.Column>
                <Grid.Column width={6}>
                    <h1>Activity Feed</h1>
                    {/* <h2>Right Column</h2> */}
                </Grid.Column>
            </Grid>
        )
    }
}
 
export default connect(mapState, actions)(EventDashboard);