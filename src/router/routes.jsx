import Posts from './../Pages/Posts';
import PostIdPage from './../Pages/PostIdPage';
import About from './../Pages/About';
import Login from './../Pages/Login';


export const privateRoutes = [
    {path: '/posts', element: Posts},
    {path: '/posts/:id', element: PostIdPage},
    {path: '/about', element: About},
]


export const publicRoutes = [
    {path: '/login', element: Login},
]