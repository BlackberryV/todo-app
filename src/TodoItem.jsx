import './style.css'

const TodoItem = ({todo, removeTodo, handleToggle}) => {
    return (
        <>
            <div
                key={todo.id}
                onClick={() => handleToggle(todo.id)}
                className={todo.complete ? 'complete' : ''}>
                {todo.name}
            </div>
            <div onClick={() => removeTodo(todo.id)}>x</div>
        </>
    );
}

export default TodoItem;
