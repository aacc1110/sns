import React, { useState, useCallback, memo } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useDispatch } from 'react-redux';
import { signUpAction } from '../reducers/user';

/**
 * Input Box 최적화
 */
const TextInput = memo(({ value, onChange }) => {
  return <Input value={value} onChange={onChange} required />;
});
export const useInput = (initValue = null) => {
  const [value, setTer] = useState(initValue);
  const handler = useCallback((e) => {
    setTer(e.target.value);
  }, []);
  return [value, handler];
};

const Signup = () => {
  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const [id, onChangeId] = useInput('');
  const [nickName, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (password !== passwordCheck) {
        return setPasswordError(true);
      }
      if (!term) {
        return setTermError(true);
      }
      dispatch(signUpAction({ id, password, nickName }));
      return null;
    },
    [password, passwordCheck, term],
  );

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordError(e.target.value !== password);
      setPasswordCheck(e.target.value);
    },
    [password],
  );
  const onChangeTerm = useCallback((e) => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);

  return (
    <>
      <Form onSubmit={onSubmit} style={{ padding: 10 }}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <TextInput name="user-id" value={id} onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="user-nickName">닉네임</label>
          <br />
          <TextInput name="user-nickName" value={nickName} onChange={onChangeNickname} />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <TextInput
            name="user-password"
            value={password}
            onChange={onChangePassword}
            type="password"
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
    </>
  );
};
export default Signup;
