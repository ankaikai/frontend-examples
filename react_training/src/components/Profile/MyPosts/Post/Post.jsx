import React from 'react';
import classes from './Post.module.scss';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <p className={classes.name}>
        {props.name}
      </p>
      <p className={classes.message}>
        {props.message}
      </p>
      <p className={classes.underItem}>
        <span>Likes: </span><span className={classes.value}>{props.likes} </span>
        <span>Dislikes: </span><span className={classes.value}>{props.dislikes} </span>
        <button className={classes.likeButton}>Like +</button>
        <button className={classes.likeButton}>Like -</button>
      </p>
      <hr />
    </div>
  );
}
export default Post;