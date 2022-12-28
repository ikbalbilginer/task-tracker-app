import axios from "axios";
import { BASE_URL } from "../../constants/config.js";

export const handleGetPriorities = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/api/task/priorities`)
      .then((response) => {
        if (response.data) {
          resolve(response.data);
        } else {
          reject("Error: get priorities");
        }
      })
      .catch((err) => {
        console.log("error : ", err);
        reject(err);
      });
  });
};
