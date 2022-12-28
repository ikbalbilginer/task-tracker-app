import axios from "axios";
import { BASE_URL } from "../../constants/config";

export const handleGetModalData = () => {
  // tokens in header
  // console.log("transfers get helper ... ");
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/api/modal/data`)
      .then((response) => {
        // console.log("/get-transfers response => ", response);

        if (response.data) {
          // console.log("transfers response : "), response.data;
          resolve(response.data);
        } else {
          reject();
        }
      })
      .catch((err) => {
        // console.log("error : ", err);
        reject(err);
      });
  });
};
