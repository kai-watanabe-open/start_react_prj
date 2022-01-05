import axios from "axios";

// Api定義書No.12 -- CountのPost
export const createCountApi = (name) => {
  const COUNT_POST_URL = `https://jsonplaceholder.typicode.com/users`;
  let params = {
    method: "POST",
    body: JSON.stringify({
      name
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  };
  return axios.post(COUNT_POST_URL, params);
};
