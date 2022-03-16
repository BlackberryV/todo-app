import {useState} from "react";

const TodoForm = ({addTodo}) => {

    const [todoValue, setTodoValue] = useState('');
    function onSubmit(e) {
        e.preventDefault();
        addTodo(todoValue);
        setTodoValue('')
    }

    return (
        <form onSubmit={onSubmit} className={"form"}>
            <input
                type={"text"}
                value={todoValue}
                onChange={e => setTodoValue(e.target.value)}
                placeholder={"Enter your task!"}
            />
            <button onClick={onSubmit}>Add todo</button>
        </form>
    )
}

export default TodoForm;