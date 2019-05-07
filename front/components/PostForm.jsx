import React from 'react';
import { Form, Input, Button } from 'antd';

const dummy = {
  isLoggedIn: true,
  imagePaths: [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShDhVXpErpHMvQZ2XR_BdUC21szZpIJJE__3lScNOTs29qpUjx',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYjqs8m7jXDQV1-x0hTvfDsk4vgSaUnZcDBdzo03d8GKF1JkfEAQ',
  ],
  mainPosts: [
    {
      User: {
        id: 1,
        nickName: '에이에이',
      },
      content: '첫번째 게시글',
      img: 'https://t1.daumcdn.net/cfile/tistory/99DF78385C94985D0F',
    },
  ],
};
const PostForm = () => {
  return (
    <div>
      <Form encType="multipart/form-data" style={{ marginBottom: 20 }}>
        <Input.TextArea maxLength={140} placeholder="자신의 이야기를 적어주세요" />
        <Input type="file" multiple hidden />
        <Button>이미지 업로드</Button>
        <Button type="primary" style={{ float: 'right' }} htmlType="submit">
          짹짹
        </Button>
        <div>
          {dummy.imagePaths.map((v) => {
            return (
              <div key={v} style={{ display: 'inline-block' }}>
                <img src={v} style={{ width: '100px' }} alt={v} />
                <div>
                  <Button>제거</Button>
                </div>
              </div>
            );
          })}
        </div>
      </Form>
    </div>
  );
};

export default PostForm;
