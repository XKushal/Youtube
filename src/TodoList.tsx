import * as React from "react";
import {ITodos} from "./ITodos"
import './TodoList.css';
import Todo from "./Todo"
import NewTodoForm from "./NewTodoForm"

interface IProps{
    todos: ITodos[];
    task: string
}

interface IState{
    todos:ITodos[];
}

class TodoList extends React.Component<IProps, IState> {
	constructor(props:IProps) {
		super(props);
		this.state = {
            todos: []
        };
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    create(newTodo: string, id: any){
        this.setState(prevState => ({
            ...prevState,
            todos : [
                ...prevState.todos, {
                    task: newTodo,
                    id: id,
                    completed: false
                }
            ]
        }))
    }
 
    remove(id: any){
        this.setState({
            todos: this.state.todos.filter(task => task.id !== id)
        });
    }

    update(id: any, updatedTask: string){
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {
                    ...todo, task: updatedTask
                };
            }
            return todo;
        }) as ITodos[];
        this.setState({
            todos: updatedTodos
        });
    }

    toggleCompletion(id: any){
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {
                    ...todo, completed: !todo.completed
                };
            }
            return todo;
        }) as ITodos[];
        this.setState({
            todos: updatedTodos
        });
    }

    render(){
        const todos = this.state.todos.map(todo => {
            return(
                <Todo 
                    key = {todo.id}
                    task = {todo.task}
                    id = {todo.id}
                    removeTodo = {this.remove}
                    updateTodo = {this.update}
                    completed = {todo.completed}
                    toggleTodo = {this.toggleCompletion}
                />
            )
        })
        return(
            <div className="TodoList">
                <h1>
					My Todo list <span> A simple react todo list app</span>
				</h1>
                <ul>{todos} </ul>
                <NewTodoForm 
                    createTodo = {this.create}
                />
            </div>
        )
    }
}

export default TodoList;
