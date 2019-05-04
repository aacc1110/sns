import React from 'react';
import { Menu, Input } from 'antd';

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu>
        <Menu.Item key="home">SNS</Menu.Item>
        <Menu.Item key="profile">프로필</Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton />
        </Menu.Item>
      </Menu>
      {children}
    </div>
  );
};

export default AppLayout;
