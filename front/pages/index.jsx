import React from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

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

const Home = () => {
  return (
    <div>
      {dummy.isLoggedIn && <PostForm />}
      {dummy.mainPosts.map((c) => {
        return <PostCard key={c} post={c} />;
      })}
    </div>
  );
};

export default Home;
