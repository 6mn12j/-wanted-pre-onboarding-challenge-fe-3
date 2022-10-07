import React from "react";

interface RouteProps {
  path: string;
  component: React.ReactElement;
  children?: React.ReactElement;
}

function Route({ path, component, children }: RouteProps) {
  return <>{component}</>;
}

export default Route;
