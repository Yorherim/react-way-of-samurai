import React from 'react';

import classes from './MyPosts.module.scss';

import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/store';

function MyPosts({ posts, newPostText, dispatch }) {
  const newPost = React.useRef();

  const addNewPost = () => {
    dispatch(addPostActionCreator());
  };

  const onPostChange = () => {
    dispatch(updateNewPostTextActionCreator(newPost.current.value));
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPost} onChange={onPostChange} value={newPostText} />
        </div>
        <button onClick={addNewPost}>Add post</button>
      </div>
      <div className={classes.posts}>
        {posts.map((p, i) => (
          <Post key={`${p}_${i}`} message={p.message} likesCount={p.likesCount} />
        ))}
      </div>
    </div>
  );
}

export default MyPosts;
