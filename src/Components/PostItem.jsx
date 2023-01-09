import React from 'react'
import { useNavigate } from 'react-router-dom';
import MyButton from './UI/button/MyButton';

function PostItem(props) {
  const router = useNavigate();
  return (
    <div className="post">
        <div className="post__content">
          <b>{props.post.id}. {props.post.title}</b>
          <div>
            {props.post.body}
          </div>
        </div>
        <div className='post__btn'>
          <MyButton onClick={() => router(`/posts/${props.post.id}`)} >Open</MyButton>
          <MyButton onClick={() => props.removePost(props.post)} >Delete</MyButton>
        </div>
      </div>
  )
}

export default PostItem