import React from 'react';
import ToDoItem from './ToDoItem';
import PropTypes from 'prop-types';

const ToDoList = (props) => {
    const styles = {    // Стили для ToList
        toDoWrapper: {
            width: '40rem',
            margin: '0 auto'
        },
        ul: {
            listStyle: 'none',
            margin: '.5rem',
            padding: 0,
            lineHeight: '2em',
            color: 'white',
            fontSize: '1em',
            fontWeight: 600,
            position: 'relative',
        }
    }
    return (
        <div className={styles.toDoWrapper} style={styles.toDoWrapper}>
            <ul style={styles.ul}>
                {props.todos.map((todo, i) => <ToDoItem todo={todo} key={todo.id} index={i} onChange={props.onToggle} />)}   {/* Мапим через props наш миссив todos из App на ToDoItem*/}
            </ul>
        </div>
    )
}

ToDoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}


export default ToDoList;

