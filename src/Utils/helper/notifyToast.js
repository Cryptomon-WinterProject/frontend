import { toast } from "react-toastify";

const notify = (message, type) => {
  toast(message, { type });
};

export default notify;
