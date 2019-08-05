import React, { Component} from "react"
// import { Link } from "react-router-dom"
import { List, Image } from "semantic-ui-react"

class EventListAttendee extends Component {
  render() {
    return (
      <List.Item>
        <Image as="a" size="mini" circular src="https://randomuser.me/api/portraits/women/42.jpg"></Image>
      </List.Item>
    )
  }
}

export default EventListAttendee;