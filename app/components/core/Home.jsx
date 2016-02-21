
import React from 'react';
import {Jumbotron, Grid, Row, Col, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import TodoApp from "../todo/ToDoApp.jsx";
import UserStore from './../../stores/UserStore.jsx';

class Home extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {};
    this.state.loggedIn = !!((typeof window !== "undefined") ? localStorage.user : undefined);
  }
  authGmail(e) {
    e.preventDefault();
    console.log('test');
    UserStore.signup();
  }
  render(){

    return (
      <Grid>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            {!this.state.loggedIn && <Jumbotron>
            <p>
              <Button bsSize="large" bsStyle="danger" onClick={this.authGmail}>Sign In with Gmail</Button>
            </p>
          </Jumbotron>}

          {this.state.loggedIn && <TodoApp login={this.state.loggedIn} />}
        </Col>
      </Row>
    </Grid>
      )
    }
  }
  export default Home;
