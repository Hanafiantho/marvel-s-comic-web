import { useLocation } from "react-router-dom";

export const URLPath = () => {
  let location = useLocation();
  let path_name =
    location.pathname.split("/")[location.pathname.split("/").length - 1];

  return path_name;
};
