import React, { useCallback } from 'react';
import Link from 'next/link';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { useInput } from '../pages/signup';
import { loginAction } from '../reducers/user';

const LoginForm = () => {
  const [userId, onChangeId] = useInput('');
  const [userPassword, onChangePassword] = useInput('');
  const dispatch = useDispatch();

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(loginAction);
      console.log('loginAction', loginAction);
    },
    [userId, userPassword],
  );
  return (
    <div>
      <Form onSubmit={onSubmitForm}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={userId} onChange={onChangeId} required />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input
            name="user-password"
            value={userPassword}
            onChange={onChangePassword}
            type="password"
            required
          />
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit">
            로그인
          </Button>
          <Link href="signup">
            <a>
              <Button>회원가입</Button>
            </a>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
