import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { loginAction } from "../reducers/user";

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [
    {
      User: {
        id: 1,
        nickname: "닉네임",
      },
      content: "첫 번째 게시글",
      img: "https://blog.kakaocdn.net/dn/0mySg/btqCUccOGVk/nQ68nZiNKoIEGNJkooELF1/img.jpg",
    },
  ],
};

const Home = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(loginAction);
  }, []);
  return (
    <div>
      {isLoggedIn ? (
        <div>로그인 했습니다. {user.nickname}</div>
      ) : (
        <div>로그아웃 했습니다.</div>
      )}
      {dummy.isLoggedIn && <PostForm />}
      {dummy.mainPosts.map((c) => {
        return <PostCard key={c} post={c} />;
      })}
    </div>
  );
};

export default Home;
