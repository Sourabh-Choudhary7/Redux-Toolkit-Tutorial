import { useDispatch } from "react-redux";
import { removeTodo } from "../redux/slices/todoSlice";

function TodoItem({ id, text, isCompleted }) {
    
    const dispatch = useDispatch();

    function removeTodoItem() {
        dispatch(removeTodo(id));
    }

    return (
        <div className="todo-item">
            <input type="checkbox" defaultChecked={isCompleted} />
            <p>{text}</p>
            <button style={{backgroundColor:'transparent', border:'none'}} onClick={removeTodoItem}>X</button>
        </div>
    )
}

export default TodoItem;