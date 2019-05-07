import React from 'react';
import { Card, Icon, Button, Avatar } from 'antd';

const PostCard = ({ post }) => {
  return (
    <div>
      <Card
        key={+post.createdAt}
        cover={post.img && <img alt="example" src={post.img} />}
        actions={[
          <Icon type="retweet" key="retweet" />,
          <Icon type="heart" key="heart" />,
          <Icon type="message" key="message" />,
          <Icon type="ellipsis" key="ellipsis" />,
        ]}
        extra={<Button>팔로우</Button>}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickName[0]}</Avatar>}
          title={post.User.nickName}
          description={post.content}
        />
      </Card>
    </div>
  );
};

export default PostCard;
