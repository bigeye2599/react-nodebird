import Head from "next/head";
import AppLayout from "../components/AppLayout";
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

export default NodeBird;
