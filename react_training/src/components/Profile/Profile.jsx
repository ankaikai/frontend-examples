import React from 'react';
import classes from './Profile.module.scss';
import PersonInfo from './PersonInfo/PersonInfo';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {

    return (
        <div className={classes.content}>
        <div>
          <PersonInfo />
        </div>
        <div>
          <MyPosts postsData = {props.postsData} newPostText = {props.newPostText} updateTextArea={props.updateTextArea} addPosts = {props.addPosts} />
        </div>
      </div>
    );
}
export default Profile;
