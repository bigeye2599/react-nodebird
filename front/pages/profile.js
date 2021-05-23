import Head from "next/head";
import AppLayout from "../components/AppLayout";
import "antd/dist/antd.css";

const Profile = () => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
      </Head>
      <AppLayout>
        <div>내 프로필</div>
      </AppLayout>
    </>
  );
};

export default Profile;
