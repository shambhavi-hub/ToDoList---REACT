import { ToDoItem } from "./ToDoItem"

export function TodoList({ todos, toggleTodo, deleteTodo }){
    return (
        <ul className="list">
      {todos.length === 0 && "No ToDos" }
      {todos.map(todo =>{
        return ( 
            <ToDoItem 
            // id={todo.id} 
            // completed={todo.completed} 
            // title={todo.title} 
            
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            >
            </ToDoItem>
        
        )
      })}
    </ul>
    )
}