import React, {Component, Fragment} from 'react';
import EventDashboard from '../../feature/event/EventDashboard/EventDashboard';
import NavBar from '../../feature/nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react';
import { Route,Switch, withRouter } from 'react-router-dom';
import HomePage from '../../feature/Home/HomePage';
import EventDetailedPage from '../../feature/event/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../feature/user/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from '../../feature/user/UserDetailed/UserDetailedPage';
import SettingsDashboard from '../../feature/user/Settings/SettingsDashboard';
import EventForm from '../../feature/event/EventForm/EventForm';
import TestPlaceInput from '../../feature/test/TestPlaceInput';


class App extends Component {
  render() {
    return (
      <Fragment>
          <Route exact path='/' component={HomePage}/>
          <Route path='/(.+)' render={() => (
            <Fragment>
            <NavBar></NavBar>
            <Container className="main">
            {/* <TestPlaceInput/> */}
              <Switch key={this.props.location.key}>
                <Route exact path='/events' component={EventDashboard}/>
                <Route path='/events/:id' component={EventDetailedPage}/>
                <Route path='/people' component={PeopleDashboard}/>
                <Route path='/profile/:id' component={UserDetailedPage}/>
                <Route path='/settings' component={SettingsDashboard}/>
                <Route path={['/createEvent','/manage/:id']} component={EventForm}/>
              </Switch>
              
            </Container>
          </Fragment>
          )}/>
      </Fragment>
      
      
    );
  }
  
}

export default withRouter(App);

