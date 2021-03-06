import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import MainSection from "./MainSection.jsx";
import TodoStore from "../../stores/TodoStore.jsx";
import Footer from "./Footer.jsx";

function getAllTodos() {
  return {todos: TodoStore.getAllTodos()}
}

class TodoApp extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
    this.state.todos = [];
    if(this.props.login){
      TodoStore.fetchToDos();
    }
   this.state = getAllTodos();
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    TodoStore.onChange(this._onChange);
  }
  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange);
  }
  _onChange() {
    this.setState(getAllTodos());
  }

  render() {
    return (
      <div >
        <Footer Alltodos={this.state.todos}/>
            <MainSection Alltodos={this.state.todos}/>

      </div>
    )
  }
}
export default TodoApp;
