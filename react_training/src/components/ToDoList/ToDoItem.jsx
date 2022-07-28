import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../../context';

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid white',
        borderRadius: '7px',
        padding: '.5rem .5rem',
        margin: '0 0 .3rem 0',
        backgroundColor: 'rgb(70, 70, 90)'
    },
    input: {
        margin: '0 0.5rem 0 0',
        cursor: 'pointer'
    } 
}
const ToDoItem = ({ todo, index, onChange }) => {
    const { removeToDo } = useContext(Context) // записываем метод removeToDo в removeTodDo используя useContext
    
    const classes = [] // массив стилей
    if (todo.completed) {  
        classes.push('done')
    }

    return (
        <div className={classes.toDoItem}>
            <li style={styles.li}>
                <span className={classes.join(' ')}>
                    <input style={styles.input} checked={todo.completed} type="checkbox" onChange={() => onChange(todo.id)} />
                    <strong>{index + 1}.</strong>
                    &nbsp;
                    {todo.title}
                </span>
                <button className='btn' onClick={removeToDo.bind(null , todo.id)}>&times;</button>
            </li>
        </div>
    )
}

ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default ToDoItem;
