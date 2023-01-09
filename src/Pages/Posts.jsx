import React, { useEffect, useState } from 'react';
import PostList from '../Components/PostList';
import '../styles/App.css'
import PostForm from '../Components/PostForm';
import PostFilter from '../Components/PostFilter';
import PostWindow from '../Components/UI/postWindow/PostWindow';
import MyButton from '../Components/UI/button/MyButton';
import { usePosts } from '../Components/hooks/usePosts';
import PostService from '../API/PostService';
import Loader from '../Components/UI/loader/Loader';
import { useFetching } from '../Components/hooks/useFetching';
import { getPagesArray, getPagesCount } from '../Components/utilits/pages';
import Paginator from '../Components/UI/Paginator/Paginator';



function Posts() {

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', search: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.search);

  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPagesCount(totalCount, limit))
  })

  useEffect(() => {
    fetchPosts()
  }, [page])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page);
  }

  return (
    <div className="App">
      <MyButton style={{ marginTop: 15 }} onClick={() => setModal(true)}>
        Create Post
      </MyButton>
      <PostWindow visible={modal} setVisible={setModal} >
        <PostForm createPost={createPost} />
      </PostWindow>
      
      <hr style={{ margin: '15px 0' }} />
      <div>
        <PostFilter filter={filter} setFilter={setFilter} />
      </div>
      {postError && 
      <h1>Erorr: {postError}</h1>}
      {isPostLoading
        ? <div><Loader/></div>
        : <PostList removePost={removePost} posts={sortedAndSearchPosts} />}
        <Paginator totalPages={totalPages} page={page} changePage={changePage} />
    </div>
  );
}

export default Posts;
