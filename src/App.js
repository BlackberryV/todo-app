import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import {useState} from "react";

function App() {
    const [todos, setTodos] = useState([]);

    function addTodo(todo) {
        if (todo) {
            setTodos([...todos, {
                id: Math.random().toString(5),
                name: todo,
                complete: false
            }]);
        }
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function handleToggle(id) {
        setTodos([
            ...todos.map(todo =>
                todo.id === id ? {...todo, complete: !todo.complete} : {...todo})])
    }

    return (
        <div className="app">
            <header><h1>You need to do {todos.length}</h1></header>
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo) =>
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    removeTodo={removeTodo}
                    handleToggle={handleToggle}
                />
            )}
        </div>
    );
}

export default App;
