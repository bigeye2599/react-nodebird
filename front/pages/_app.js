import React from "react";
import { createStore } from "redux";
import withRedux from "next-redux-wrapper";
import Head from "next/head";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import AppLayout from "../components/AppLayout";
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
  const store = createStore(rootReducer, initialState);
  return store;
})(NodeBird);
