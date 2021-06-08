import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Card, Avatar, Button, Form, List, Input, Comment } from "antd";
import {
  RetweetOutlined,
  HeartOutlined,
  MessageOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { ADD_COMMENT_REQUEST } from "../reducers/post";

const PostCard = ({ post }) => {
  const [commentFormOpened, setCommentFormOpened] = useState("");
  const [commentText, setCommentText] = useState("");

  const { me } = useSelector((state) => state.user);
  const { commentAdded, isAddingComment } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  const onFinishComment = useCallback(() => {
    if (!me) {
      return alert("로그인이 필요합니다.");
    }
    dispatch({ type: ADD_COMMENT_REQUEST, data: { postId: post.id } });
  }, [me && me.id]);

  const onChangeCommentText = useCallback((e) => {
    setCommentText(e.target.value);
    e.preventDefault();
  }, []);

  useEffect(() => {
    setCommentText("");
  }, [commentAdded === true]);

  return (
    <div>
      <Card
        key={+post.createdAt}
        cover={post.img && <img alt="example" src={post.img} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          <HeartOutlined key="heart" />,
          <MessageOutlined key="message" onClick={onToggleComment} />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
        extra={<Button>팔로우</Button>}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={
            <div>
              {post.content.split(/(#[^\s]+)/g).map((v) => {
                if (v.match(/#[^\s]+/)) {
                  return (
                    <Link href={`/hashtag/${v.slice(1)}`} key={v}>
                      <a>{v}</a>
                    </Link>
                  );
                }
                return v;
              })}
            </div>
          }
        />
      </Card>
      {commentFormOpened && (
        <>
          <Form onFinish={onFinishComment}>
            <Form.Item>
              <Input.TextArea
                rows={4}
                value={commentText}
                onChange={onChangeCommentText}
              />
            </Form.Item>
            <Button type="primary" htmlType="submit" loading={isAddingComment}>
              삐약
            </Button>
          </Form>
          <List
            header={`${post.Comments ? post.Comments.length : 0} 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments || []}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                  content={item.content}
                />
              </li>
            )}
          />
        </>
      )}
    </div>
  );
};

PostCard.prototype = {
  post: PropTypes.shape({
    User: PropTypes.object,
    content: PropTypes.string,
    img: PropTypes.string,
    createdAt: PropTypes.object,
  }),
};

export default PostCard;
