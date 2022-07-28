import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import ToDo from './components/ToDoList/ToDo';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Context from './context';
import React from 'react';

const App = (props) => {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Buy this" },
    { id: 2, completed: false, title: "Buy second" },
    { id: 3, completed: false, title: "Buy some" }
  ])
  function toggleToDo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {   // Если id массива совпадает с id выбранного элемента меняем False на True
          todo.completed = !todo.completed   // False to True to False
        }
        return todo // возвращаем измененный массив
      })
    )
  }
  function removeToDo(id) { // при изменении state удаляется элемент массива
    setTodos(todos.filter(todo => todo.id !== id))
  }
  function addToDo(title) {
    setTodos(todos.concat([{   // присоеденяем массив из input
      title,
      id: Date.now(),
      completed: false
    }]))

  }
  return (
    <BrowserRouter >
      <Context.Provider value={{ removeToDo: removeToDo }}> {/*Чтобы передать функцию по удалению элемента оборачиваем все в Context.Provider*/}
        <div className='app-wrapper-grid'>
          <Header name='Anton' age='99' />
          <Navbar />
          <div className='app-wrapper-content'>
            <Routes>
              <Route path="/profile" element={<Profile
                postsData={props.state.profilePage.postsData}
                updateTextArea={props.updateTextArea}
                newPostText={props.state.profilePage.newPostText}
                addPosts={props.addPosts}
              />}
              />
              <Route exact path="/messages/*" element={<Messages
                dialogsData={props.state.messagesPage.dialogsData}
                messagesData={props.state.messagesPage.messagesData}
              />}
              />
              <Route path="/todolist" element={<ToDo
                onCreate={addToDo} todos={todos}
                onToggle={toggleToDo}
              />}
              />
            </Routes>
          </div>
        </div>
      </Context.Provider>
    </BrowserRouter>

  );
}

export default App