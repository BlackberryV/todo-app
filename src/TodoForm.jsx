import {useState} from "react";

const TodoForm = ({addTodo}) => {

    const [todoValue, setTodoValue] = useState('');
    function onSubmit(e) {
        e.preventDefault();
        addTodo(todoValue);
        setTodoValue(''); //todo
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type={"text"}
                onChange={e => setTodoValue(e.target.value)}
            />
            <button onClick={onSubmit}>Add todo</button>
        </form>
    )
}

export default TodoForm;