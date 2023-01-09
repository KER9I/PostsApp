import React, { useState } from 'react'
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';


function PostForm({createPost}) {

    const [post, setPost] = useState({title: '', body: ''})
    const [number, setNumber] = useState(1)

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {...post, id: number}
        createPost(newPost);
        setPost({title: '', body: ''})
        setNumber(number + 1)
      }

  return (
    <form>
        <MyInput value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
         type='text' 
         placeholder='Post Name' />
        <MyInput value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          type='text' 
          placeholder='Post Description' />
        <MyButton onClick={addNewPost} >Add Post</MyButton>
      </form>
  )
}

export default PostForm