import React from "react";
import { createStore, applyMiddleware } from "redux";
import withRedux from "next-redux-wrapper";
import Head from "next/head";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import AppLayout from "../components/AppLayout";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers";

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType,
  store: PropTypes.object,
};

export default withRedux((initialState, options) => {
  const middlewares = [];
  const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, initialState, enhancer);
  return store;
})(NodeBird);
