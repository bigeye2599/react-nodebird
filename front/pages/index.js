import Head from "next/head";
import AppLayout from "../components/AppLayout";
import "antd/dist/antd.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
      </Head>
      <AppLayout>
        <div>Hello, Next!</div>
      </AppLayout>
    </>
  );
};

export default Home;
