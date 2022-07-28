import React from 'react';

function ToDoHeader() {
    const styles = {
        h2: {
            color: 'aqua',
            fontWeight: 600,
            textDecoration: 'underline',
            fontSize: '24px',
            textAlign: 'center'
        }
    }
    return (
        <div>
            <h2 style={styles.h2}>ToDo List</h2>
        </div>
    )
}
export default ToDoHeader;