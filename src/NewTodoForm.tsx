import * as React from "react";
import uuid from "uuid/v4";
import './NewTodoForm.css';

interface IProps{
    createTodo: (task: string, id:any ) => void;
}
interface IState{
    task: string;
    id: any;
    completed: boolean;
}
class NewTodoForm extends React.Component<IProps, IState> {
    constructor(props: IProps){
        super(props);
        this.state = {
            task: "",
            id: uuid(),
            completed: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event: any){
        this.setState({
            task: event.target.value,
        });
        
    }

    handleSubmit(event: any){
        event.preventDefault();
        this.props.createTodo(this.state.task, this.state.id);
        this.setState({
            task: "",
            id: uuid()
        })
    }

	render() {
		return (
			<form className="NewTodoForm" onSubmit = {this.handleSubmit}>
                <label htmlFor = "task"> New Todo</label>
                
                <input 
                    type="text" 
                    placeholder="New Todo" 
                    id="task" 
                    value={this.state.task}
                    onChange = { this.handleChange}>
                </input>
                <button>Save</button>
            </form>
		);
	}
}

export default NewTodoForm;
