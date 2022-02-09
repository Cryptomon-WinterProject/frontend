import axios from "axios";
import { UPLOAD_IMAGE_URL } from "../Utils/constants";

export const uploadImage = async (images) => {
  try {
    const formData = new FormData();
    formData.append("photo", images);
    const { data } = await axios.post(UPLOAD_IMAGE_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  } catch (err) {
    throw err;
  }
};
