import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import AppLayout from '../components/AppLaout';
import reducer from '../reducers';
import rootSaga from '../saga';

const Sns = ({ Component, store }) => {
  return (
    <Provider store={store}>
      <Head>
        <title>Sns</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js" />
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </Provider>
  );
};

export default withRedux((initialState) => {
  const sageMiddleware = createSagaMiddleware();
  const middlewares = [sageMiddleware];
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  //    composeWithDevTools(),
  /*     typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f, */
  const store = createStore(reducer, initialState, enhancer);
  sageMiddleware.run(rootSaga);
  return store;
})(Sns);
