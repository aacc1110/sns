import React, { useState } from 'react';
import Head from 'next/head';
import { Form, Input, Button, Checkbox } from 'antd';
import AppLayout from '../components/AppLaout';

const Signup = () => {
  const [id, setId] = useState('');
  const [nickName, setNickName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log({
      id,
      nickName,
      password,
      passwordCheck,
      term,
    });
    return false;
  };

  const onChangeId = e => {
    setId(e.target.value);
  };
  const onChangeNickname = e => {
    setNickName(e.target.value);
  };
  const onChangePassword = e => {
    setPassword(e.target.value);
  };
  const onChangePasswordCheck = e => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  };
  const onChangeTerm = e => {
    setTermError(false);
    setTerm(e.target.checked);
  };

  return (
    <>
      <Head>
        <title>SNS</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js" />
      </Head>
      <AppLayout>
        <Form onSubmit={onSubmit} style={{ padding: 10 }}>
          <div>
            <label htmlFor="user-id">아이디</label>
            <br />
            <Input name="user-id" value={id} onChange={onChangeId} required />
          </div>
          <div>
            <label htmlFor="user-nickName">닉네임</label>
            <br />
            <Input name="user-nickName" value={nickName} onChange={onChangeNickname} required />
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
          <div>
            <label htmlFor="user-passwordCheck">비밀번호 확인</label>
            <br />
            <Input
              name="user-passwordCheck"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
              type="password"
              required
            />
            {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
          </div>
          <div>
            <Checkbox name="user-term" value={term} onChange={onChangeTerm} required />
            약관에 동의합니다.
            {termError && <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div>}
          </div>
          <div style={{ marginTop: 10 }}>
            <Button type="primary" htmlType="submit">
              가입하기
            </Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};
export default Signup;
