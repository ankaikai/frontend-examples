import React, {useState} from 'react';
import PropTypes from 'prop-types';
function AddToDo({onCreate}) {
    const styles = {
        form: {
            display: 'flex',
            justifyContent: 'center'
        },
        input: {
            width: '20rem',
            height: '1.5rem',
            margin: '0 5px 0 0'
        }
    }
    const [value, setValue] = useState('')

    function submitHandler(event) {
        event.preventDefault() 
        if (value.trim()) {  
            onCreate(value) // метод AddToDo в APP
        }
    }

    return (
        <form style={styles.form} onSubmit={submitHandler}>
            <input style={styles.input} onChange={event => setValue(event.target.value)} type="text" />
            <button className='btn' type=''>Add ToDo</button>
        </form>
    )
}

AddToDo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddToDo;
