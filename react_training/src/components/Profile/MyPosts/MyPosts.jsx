import React from 'react';
import classes from './MyPosts.module.scss';
import Post from './Post/Post.jsx';

const MyPosts = (props) => {

  let postElements =    // map'им данные по постам
    props.postsData.map(post => (<Post name={post.name} message={post.message} likes={post.likes} dislikes={post.dislikes} />));

    let newPostElement = React.createRef();       // Создаем ref
    let addPost = () => { // создаем функцию и прокидываем ее в button              
      let post = newPostElement.current.value;  //
      props.addPosts(post);      // добавляем пост к данным в state
    }
    let onChangePost = () => {   // Добавляет из state значение textarea, отправленное в state 
      let text = newPostElement.current.value; // Записываем text area в переменную
      props.updateTextArea(text) // Добавляем значение в метод, который добавляет в state текст из textarea
      
    }

  return (
    <div className={classes.content}>
      <textarea ref = {newPostElement} className={classes.textArea} updateTextArea={props.updateTextArea} onChange={onChangePost} value={props.newPostText} cols="80" rows="3"></textarea> {/* textarea для добавления нового поста, указываем ref */}
      <div className={classes.postButtons}>   
        <button onClick={addPost} className={classes.addPost + ' ' + classes.btn}>Add New</button>   {/* в кнопке callback добавления нового поста */}
      </div>
      <hr />
      {postElements}
    </div>
  );
}
export default MyPosts;
