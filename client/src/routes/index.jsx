import MainLayout from '@layouts/MainLayout';

import Home from '@pages/Home';
import Register from '@pages/Register';
import Login from '@pages/Login';
import CreatePost from '@pages/CreatePost';
import Profile from '@pages/Profile';
import Bookmark from '@pages/Bookmark';
import DetailPage from '@pages/Detail';
import NotFound from '@pages/NotFound';

const routes = [
  {
    path: '/',
    name: 'Home',
    protected: false,
    component: Home,
    layout: MainLayout,
  },
  {
    path: '/register',
    name: 'Register',
    protected: false,
    component: Register,
    layout: MainLayout,
  },
  {
    path: '/login',
    name: 'Login',
    protected: false,
    component: Login,
    layout: MainLayout,
  },
  {
    path: '/profile',
    name: 'Profile',
    protected: true,
    component: Profile,
    layout: MainLayout,
  },
  {
    path: '/create',
    name: 'Create',
    protected: true,
    component: CreatePost,
    layout: MainLayout,
  },
  {
    path: '/bookmark',
    name: 'Bookmark',
    protected: true,
    component: Bookmark,
    layout: MainLayout,
  },
  {
    path: '/detail',
    name: 'Detail',
    protected: true,
    component: DetailPage,
    layout: MainLayout,
  },
  { 
    path: '*', 
    name: 'Not Found', 
    component: NotFound, 
    layout: MainLayout, 
    protected: false 
  },
];

export default routes;
