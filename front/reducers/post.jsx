export const initialState = {
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

const ADD_POST = 'ADD_POST';
const ADD_DUMMY = 'ADD_DUMMY';

export const addPost = {
  type: ADD_POST,
};

export const addDummy = {
  type: ADD_DUMMY,
  data: {
    content: 'Hello',
    UserId: 1,
    User: {
      nickname: '에이에이',
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
      };
    }
    case ADD_DUMMY: {
      return {
        ...state,
        mainPosts: [action.data, ...state.mainPosts],
      };
    }
    default:
      return {
        ...state,
      };
  }
};
