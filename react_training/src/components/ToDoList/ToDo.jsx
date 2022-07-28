import React from 'react';
import ToDoHeader from './ToDoHeader';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

function ToDo(props) {
    const styles = {
        toDoWrapper: {
                        
        },
        noToDo: {
            color: 'white',
            fontSize: '20px',
            fontWeight: 600,
            textAlign: 'center'
        }
    }
    return (
        <div className={styles.toDoWrapper} style={styles.toDoWrapper}>
        <ToDoHeader />
        <AddToDo onCreate={props.onCreate} />
        {props.todos.length ? <ToDoList todos={props.todos} onToggle={props.onToggle} />:<p style={styles.noToDo} className='noToDo'>Add some ToDo</p>}
        </div>
        
    )
}
export default ToDo;