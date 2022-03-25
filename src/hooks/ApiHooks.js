// TODO: add necessary imports
import {useEffect, useState} from 'react';
import {baseUrl} from '../utils/variables';

const fetchJson = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    const json = await response.json();
    if (response.ok) {
      return json;
    } else {
      const msg = json.message;
      throw new Error(msg);
    }
  } catch (e) {
    throw new Error(e.message);
  }
};

const useMedia = () => {
  // TODO: move mediaArray state here
  const [mediaArray, setMediaArray] = useState([]);
  const getMedia = async () => {
    try {
      const media = await fetchJson(baseUrl + 'media');
      const allFiles = await Promise.all(
        media.map(async (file) => {
          return await fetchJson(`${baseUrl}media/${file.file_id}`);
        })
      );
      setMediaArray(allFiles);
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    getMedia();
  }, []);
  // TODO: move loadMedia function here
  // TODO: move useEffect here
  return {mediaArray};
};

const useUser = () => {
  const getUser = () => {};
  const postUser = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    const json = await fetchJson(baseUrl + 'users', fetchOptions);

    console.log(json);
  };
  return {getUser, postUser};
};

const useLogin = () => {
  const postLogin = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    const json = await fetchJson(baseUrl + 'login', fetchOptions);

    console.log(json);
  };
  return {postLogin};
};

export {useMedia, useUser, useLogin};
