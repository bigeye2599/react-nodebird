import Head from "next/head";
import AppLayout from "../components/AppLayout";
import PropTypes from "prop-types";
import "antd/dist/antd.css";

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
};

export default NodeBird;
