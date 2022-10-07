import React, { useCallback, useEffect, useState } from "react";

export interface RouteObject {
  path: string;
  component: React.ReactElement;
  key: string;
}

export interface RouterContext {
  location: {
    pathname: string;
  };
  navigate: (to: string) => void;
}
const initialState = {
  location: {
    pathname: "",
  },
  navigate: () => {},
};
export const RouterContext = React.createContext<RouterContext>(initialState);

export function RouterProvider({ children }: { children: React.ReactElement }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  return (
    <RouterContext.Provider
      value={{
        location: { pathname: currentPath },
        navigate: (path: string) => {
          setCurrentPath(path);
          window.history.pushState({}, "", path);
        },
      }}
    >
      {children}
    </RouterContext.Provider>
  );
}
