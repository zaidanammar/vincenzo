import axios from "axios";

class AxiosInstance {
  static API = () => {
    return axios.create({
      baseURL: process.env.REACT_APP_API_BASE_URL,
    });
  };
}

export default AxiosInstance;
