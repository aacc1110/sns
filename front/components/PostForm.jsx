import React from 'react';
import { Form, Input, Button } from 'antd';
import { useSelector } from 'react-redux';

const PostForm = () => {
  const { imagePaths } = useSelector((state) => state.post);
  console.log('imagePaths.length');
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
          {imagePaths.map((v) => {
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
