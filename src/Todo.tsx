import * as React from "react";
import './Todo.css';

interface IProps{
    task: string;
    id:any;
    completed: boolean;
    removeTodo: (id: any) => void;
    updateTodo: (id: any, updatedTask: string) => void;
    toggleTodo: (id: any) => void;
}

interface IState{
    isEditing: boolean;
    task: string;
}

class Todo extends React.Component<IProps, IState> {
    constructor(props: IProps){
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleRemove(id:any){
        this.props.removeTodo(id);
    }

    toggleForm(){
        this.setState({
            isEditing: !this.state.isEditing
        });
    }

    handleUpdate(event:any){
        event.preventDefault();
        //take new task data and pass up to parent 
        this.props.updateTodo(this.props.id, this.state.task)
        this.setState({
            isEditing: false
        });
    }

    handleChange(event: any){
        this.setState({
            task: event.target.value
        });
    }

    handleToggle(id: any){
        this.props.toggleTodo(this.props.id);
    }
	render() {
        let result: any;
        if(this.state.isEditing){
            result = (
                <div className="Todo">
                    <form className="Todo-edit-form" onSubmit={ this.handleUpdate}>
                        <input 
                            type="text"
                            value = {this.state.task}
                            onChange = {this.handleChange}>
                        </input>
                        <button>save</button>
                    </form>
                </div>
            )
        }else{
            result = (
                <div className="Todo">
                    <li 
                        className={this.props.completed ? 'Todo-task completed' : 'Todo-task'}
                        onClick = {() => this.handleToggle(this.props.id)}
                    >
                        {this.props.task}
                    </li>
                <div className="Todo-buttons">
                    <button onClick = {this.toggleForm}>
                        <i className="fas fa-pen" />
                    </button>
                    <button onClick = {() => this.handleRemove(this.props.id)}>
                        <i className="fas fa-trash" />
                    </button>
                </div>
			</div>
            )
        }
		return result;
	}
}

export default Todo;
