import './style.css'

const TodoItem = ({todo, removeTodo, handleToggle}) => {
    return (
        <div className={"todoItem"}>
            <div
                key={todo.id}
                onClick={() => handleToggle(todo.id)}
                className={todo.complete ? 'complete' : ''}>
                {todo.name}
            </div>
            <div className={"deleteBtn"} onClick={() => removeTodo(todo.id)}>x</div>
        </div>
    );
}

export default TodoItem;
