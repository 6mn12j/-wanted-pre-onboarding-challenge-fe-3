import React, { Component, isValidElement } from "react";
import { useRouter } from "../Hooks/useRouter";
import { RouteObject } from "./RouterProvider";

interface ChildrenProps {
  path: string;
  component: React.ReactElement;
}

const keySetString = (key: number) => `${key}`;
export function Router({
  children,
}: {
  children: React.ReactElement<ChildrenProps>[];
}) {
  const { location } = useRouter();

  const childrenArr = React.Children.toArray(children);
  const routes: RouteObject[] = childrenArr.map((child, index) => {
    if (!isValidElement(child)) {
      return {
        key: keySetString(index),
        component: null,
        path: "",
      };
    }
    const { path, component } = child.props;
    return {
      key: keySetString(index),
      component,
      path,
    };
  });

  const route = routes.find((route) => route.path === location.pathname);

  return route ? React.cloneElement(route.component, { key: route.key }) : null;
}
