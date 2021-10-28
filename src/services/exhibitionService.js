import axios from "../utils/axios";

export const getExhibitions = (mhxDomain) => {
  return new Promise((resolve, reject) => {
    axios
      .get("/api/v1/public/exhibitions",{
        headers: {
          MHX_DOMAIN: mhxDomain
        }
      })
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data);
        }
        reject(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}