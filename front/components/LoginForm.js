import React, { useCallback } from "react";
import Link from "next/link";
import { Form, Input, Button } from "antd";
import { useInput } from "../pages/signup";
import { useDispatch, useSelector } from "react-redux";
import { LOG_IN_REQUEST } from "../reducers/user";

const LoginForm = () => {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const { isLoggingIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onFinish = useCallback(() => {
    dispatch({ type: LOG_IN_REQUEST, data: { userId: id, password } });
  }, [id, password]);
  return (
    <Form onFinish={onFinish} style={{ padding: "10px" }}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          value={password}
          onChange={onChangePassword}
          type="password"
          required
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <Button type="primary" htmlType="submit" loading={isLoggingIn}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;
