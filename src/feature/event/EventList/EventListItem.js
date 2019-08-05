import React, { Component } from "react"
import { Segment, Item, Icon, List, Button, Label } from "semantic-ui-react"
import EventListAttendee from "./EventListAttendee";

// import EventListAttendee from "./EventListAttendee"
// import { objToArr } from "../../../app/common/utils/helpers"

// const renderAttendees = attendees =>
//   attendees &&
//   objToArr(attendees).map(attendee => (
//     <EventListAttendee key={attendee.id} attendee={attendee} />
//   ))

class EventListItem extends Component {
  render() {
    return (
           <Segment.Group>
              <Segment>
                <Item.Group>
                  <Item>
                    <Item.Image size="tiny" circular src="https://randomuser.me/portraits/women/42.jpg" />
                    <Item.Content>
                      <Item.Header as="a">Event Title</Item.Header>
                      <Item.Description>
                        Hosted by <a>hosted by</a>
                      </Item.Description>
                    </Item.Content>
                  </Item>
                </Item.Group>
              </Segment>
              <Segment>
                <span>
                  <Icon name="clock" /> date |
                  <Icon name="marker" /> time
                </span>
              </Segment>
              <Segment secondary>
                <List horizontal>
                  <EventListAttendee></EventListAttendee>
                  <EventListAttendee></EventListAttendee>
                  <EventListAttendee></EventListAttendee>

                  {/* todo: attendees go here */}
                </List>
              </Segment>
              <Segment clearing>
                <Button as="a" color="teal" floated="right" content="View" />
              </Segment>
            </Segment.Group>
    )
  }
}

// const EventListItem = ({ event }) => (

//   // <Segment.Group>
//   //   <Segment>
//   //     <Item.Group>
//   //       <Item>
//   //         <Item.Image size="tiny" circular src={event.hostPhotoURL} />
//   //         <Item.Content>
//   //           <Item.Header as={Link} to={`/event/${event.id}`}>
//   //             {event.title}
//   //           </Item.Header>
//   //           <Item.Description>
//   //             Hosted by{" "}
//   //             <Link to={`/profile/${event.hostUid}`}>{event.hostedBy}</Link>
//   //           </Item.Description>
//   //           {event.cancelled && (
//   //             <Label
//   //               style={{ top: -40 }}
//   //               color="red"
//   //               ribbon="right"
//   //               content="Event has been cancelled"
//   //             />
//   //           )}
//   //         </Item.Content>
//   //       </Item>
//   //     </Item.Group>
//   //   </Segment>
//   //   <Segment>
//   //     <span>
//   //       <Icon name="clock" /> {format(event.date, "dddd Do MMMM")} at{" "}
//   //       {format(event.date, "HH:mm")} |
//   //       <Icon name="marker" /> {event.venue}
//   //     </span>
//   //   </Segment>
//   //   {/* <Segment secondary>
//   //     <List horizontal>{renderAttendees(event.attendees)}</List>
//   //   </Segment> */}
//   //   <Segment clearing>
//   //     <span>{event.description}</span>
//   //     <Button
//   //       as={Link}
//   //       to={`/event/${event.id}`}
//   //       color="teal"
//   //       floated="right"
//   //       content="View"
//   //     />
//   //   </Segment>
//   // </Segment.Group>
// )

export default EventListItem
