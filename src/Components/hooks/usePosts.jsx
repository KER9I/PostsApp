import { useMemo } from 'react';


export const useSortedPost = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
          return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return posts;
      }, [sort, posts])

      return sortedPosts;
}

export const usePosts = (posts, sort, search) => {
    const sortedPosts = useSortedPost(posts, sort);

    const sortedAndSearchPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(search))
      }, [search, sortedPosts])

      return sortedAndSearchPosts;
}