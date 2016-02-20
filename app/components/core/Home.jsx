
import React from 'react';
import {Jumbotron, Grid, Row, Col, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import TodoApp from "../todo/ToDoApp.jsx";
import UserStore from './../../stores/UserStore.jsx';

class Home extends React.Component {
  constructor(props, context){
    super(props, context);
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
          <Col md={12}>
            <Jumbotron>
              <p>
                <Button bsSize="large" bsStyle="danger" onClick={this.authGmail}>Sign In with Gmail</Button></p>
              </Jumbotron>
          <TodoApp/>
        </Col>
      </Row>
    </Grid>
      )
    }
  }
  export default Home;
