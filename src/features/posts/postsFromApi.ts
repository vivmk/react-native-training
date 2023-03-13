import apiJsonData from '../../mockPosts.json';

export const getPostsFromApi = () => {
  const apiData = {postsResult: apiJsonData};
  return apiData;
};
