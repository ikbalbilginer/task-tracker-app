import axios from "axios";
import { BASE_URL } from "../../constants/config";

export const handleGetModalData = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/api/modal/data`)
      .then((response) => {
        if (response.data) {
          resolve(response.data);
        } else {
          reject();
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};
