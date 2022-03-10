import axios from 'axios';

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
  },
});

export const getUsers = async (searchString) => {
  const searchParams = new URLSearchParams({
    q: searchString,
  });

  const res = await githubApi.get(`/search/users?${searchParams}`);
  return res.data.items;
};

export const getUser = async (login) => {
  const res = await githubApi.get(`/users/${login}`);
  return res.data;
};

export const getRepos = async (login) => {
  const res = await githubApi.get(`/users/${login}/repos`);
  return res.data;
};

export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    githubApi.get(`/users/${login}`),
    githubApi.get(`/users/${login}/repos`),
  ]);

  return { user: user.data, repos: repos.data };
};
