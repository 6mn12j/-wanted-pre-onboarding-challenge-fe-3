import { useContext } from "react";
import { RouterContext } from "../Router/RouterProvider";

export const useRouter = () => {
  const context = useContext(RouterContext);

  if (context === undefined)
    throw new Error("useRouter must be used within a Router");

  const navigate = (path: string) => {
    context.navigate(path);
  };

  return { context, location: context.location, navigate };
};
