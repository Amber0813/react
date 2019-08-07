import React, { Component } from 'react';
import { Segment, Form, Button, Header, Grid } from 'semantic-ui-react';
import {connect} from 'react-redux';
import  {reduxForm, Field} from 'redux-form';
import {composeValidators, combineValidators, isRequired, hasLengthGreaterThan} from 'revalidate';
import {createEvent, updateEvent, deleteEvent} from '../eventActions';
import cuid from "cuid"
import TextInput from '../../../App/common/form/TextInput';
import TextArea from '../../../App/common/form/TextArea';
import SelectInput from '../../../App/common/form/SelectInput';
import DateInput from '../../../App/common/form/DateInput';
import PlaceInput from '../../../App/common/form/PlaceInput';



const actions = {
  createEvent,
  updateEvent,
  deleteEvent 
};

const category = [
    {key: 'drinks', text: 'Drinks', value: 'drinks'},
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'film', text: 'Film', value: 'film'},
    {key: 'food', text: 'Food', value: 'food'},
    {key: 'music', text: 'Music', value: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel'},
]; 

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {
  };

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0]; 
  }

  return {
    initialValues: event
  };
}

const validate = combineValidators({
   title: isRequired({message: "The event title is required"}),
   category: isRequired({message: "The category title is required"}),
   description: composeValidators(
    isRequired({message: "The event title is required"}),
    hasLengthGreaterThan(4)({message: "Description needs to be at least 5 characters"}),
   )(),
    city: isRequired("city"),
    venue: isRequired('venue'), 
    date: isRequired('date')

})

class EventForm extends Component {
    onFormSubmit = values => {
      if (this.props.initialValues.id) {
        this.props.updateEvent(values);
        this.props.history.push(`/events/${this.props.initialValues.id}`)

      }
      else {
        console.log(this.state);
        const newEvent = {
          ...values,
          id: cuid(),
          hostPhotoURL:"assets/user.png",
          hostedBy: "Bob"
        }
        this.props.createEvent(newEvent);
        this.props.history.push(`/events/${newEvent.id}`)
      }
    }

  
    render() {
      const {history, initialValues, invalid, submitting, pristine} = this.props;
        return (
          <Grid>
            <Grid.Column width={10}>
              <Segment>
                <Header sub color='teal' content="Event Details"></Header>
                <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)} autoComplete="off">
                  <Field name='title' component={TextInput} placeholder='Give your event a name '></Field>
                  <Field name='category' component={SelectInput} options={category} placeholder='What is your event about?'></Field>
                  <Field name='description' component={TextArea} rows={3} placeholder='Tell us about your event'></Field>
                <Header sub color='teal' content="Event Location Details"></Header>

                  <Field name='city' component={PlaceInput} placeholder='Event City'></Field>
                  <Field name='venue ' component={TextInput} placeholder='Event Venue'></Field>
                  <Field name='date' component={DateInput} 
                  dateFormat="dd LLL yyyy h:mm a"
                  showTimeSelect
                  timeFormat="HH:mm"
                  placeholder='Event Date '></Field>

                  <Button positive disabled={invalid || submitting || pristine}onClick={this.handleFormSubmit} type="submit">
                    Submit
                  </Button>
                  <Button onClick={initialValues.id ? () => history.push(`/events/${initialValues.id}`) : () =>  history.push('/events')} type="button">Cancel</Button>
                </Form>
              </Segment>
            </Grid.Column>
          </Grid>
        );
    }
}

export default connect(mapState, actions)(reduxForm({form:'eventForm', validate})(EventForm));
