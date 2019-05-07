import React from 'react';
import { Card, Avatar } from 'antd';

const dummy = {
  nickName: '에이에이',
  Post: [],
  Followings: [],
  Followers: [],
  isLoggedIn: false,
};
const UserProfile = () => {
  return (
    <div>
      <Card
        actions={[
          <div key="twit">
            짹짹
            <br />
            {dummy.Post.length}
          </div>,
          <div key="following">
            팔로잉
            <br />
            {dummy.Followings.length}
          </div>,
          <div key="follower">
            팔로워
            <br />
            {dummy.Followers.length}
          </div>,
        ]}
      >
        <Card.Meta avatar={<Avatar>{dummy.nickName[0]}</Avatar>} title={dummy.nickName} />
      </Card>
    </div>
  );
};

export default UserProfile;
