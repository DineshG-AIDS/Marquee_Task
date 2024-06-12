import toast, { Toaster } from "react-hot-toast";

export const showToast = (content) => {
  toast.success(content, {
    position: "top-right",
    duration: 3000,
  });
};
export const ErrorToast = (content) => {
  toast.error(content, {
    position: "top-right",
    duration: 3000,
  });
};
export const Toast = () => {
  return <Toaster position="top-right" reverseOrder={false} />;
};
