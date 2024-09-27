import axios from "axios";
import { API_ENDPOINT, AI_API_ENDPOINT } from "../constants/common";

export const apiCall = async (payload) => {
  const { url, isAI = false } = payload;

  const API_URL = `${isAI ? AI_API_ENDPOINT : API_ENDPOINT}${url}`;

  const apiParams = {
    ...payload,
    url: API_URL,
  };

  try {
    const apiResponse = await axios(apiParams);

    if (apiResponse?.data) {
      return apiResponse?.data;
    }
  } catch (error) {
    //API FAILURE
    console.log("api failed", error);

    if (error.response.status === 401) {
      console.log(error.response.status);
    }

    return null;
  }
};
