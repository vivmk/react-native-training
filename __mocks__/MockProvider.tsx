import React from 'react';
import {Provider} from 'react-redux';

const store = {
  postsData: {},
  isPostsLoading: false,
  usersData: {},
};

const MockProvider = (props: any) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default MockProvider;
