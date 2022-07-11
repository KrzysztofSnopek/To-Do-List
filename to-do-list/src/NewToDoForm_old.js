import React, {Component} from "react";

class NewToDoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            AddToDo: '',
            todos: [{activity: 'Brush your teeth after every meal'}]
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const newToDo = {activity: this.state.AddToDo}
        this.setState({todos: [...this.state.todos, newToDo]});
        this.setState({activity: ''});
    }

    handleChange(e){
        this.setState({
            value: e.target.value
        });
    }

    render () {
        return (<div>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="task">
                  <p>
                      What do you have to do?
                  </p>
              </label>
              <input
                   type="text"
                   value={this.state.value}
                   onChange={this.handleChange}
                   name="activity"
                   htmlFor='task'
                   id='task'
              />
              <button>
                Add new task
              </button>
           </form>
          <ul>
          {this.state.todos.map((todo) => (
              <li>
                  {todo.activity}
              </li>
          )
          )}
          </ul>
        </div>
        );
    }
}

export default NewToDoForm;
