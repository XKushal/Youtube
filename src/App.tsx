import * as React from "react";
import TodoList from './TodoList';
import { ITodos } from "./ITodos";

interface IProps{
    todos: ITodos[];
    task: string
}
class App extends React.Component<IProps, any> {
	render() {
		return (
			<div>
                <TodoList 
                    key = {1}
                    todos = {this.props.todos}
                    task = {this.props.task}
                />
			</div>
		);
	}
}

export default App;
