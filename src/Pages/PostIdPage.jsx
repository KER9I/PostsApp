import React, { useEffect, useState } from 'react'
import { useFetching } from './../Components/hooks/useFetching';
import PostService from './../API/PostService';
import { useParams } from 'react-router-dom';
import Loader from './../Components/UI/loader/Loader';
import '../styles/App.css'

function PostIdPage() {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id)
        setPost(response.data)
    })

    const [fetchCommentsById, isComLoading, comError] = useFetching(async () => {
        const response = await PostService.getCommnentsByPostId(params.id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchCommentsById(params.id)
    }, [])

    return (
        <div>
            {isLoading
                ? <Loader />
                : <div>
                    <h2>Post {post.id}:</h2>
                    <div className='postPage'>{post.id}. {post.title}</div>
                    <h2>Post description:</h2>         
                    <div className='postPage'>{post.body}</div>
                </div>}
                <h2>Comments:</h2>
            {isComLoading
            ? <Loader />
            : <div>
                {comments.map(com =>    
                <div key={com.id} className='comLine'><h3>{com.email}</h3>{com.body}</div>)}
            </div>}
        </div>
    )
} 

export default PostIdPage