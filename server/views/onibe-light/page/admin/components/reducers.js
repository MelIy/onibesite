'use strict';

import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk  from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

import posts from './posts/posts';
import post from './posts/post';

const middleware = composeWithDevTools(applyMiddleware(promise(), thunk, logger()));

const reducers = combineReducers({
    posts: posts.reducers.fetchPostsReducer,
    post: post.reducers.fetchPostReducer
});

const store = createStore(reducers, middleware);


export default store;