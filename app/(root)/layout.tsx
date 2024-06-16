import React, { ReactNode } from "react";

type Props = {};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return <main>{children}</main>;
};

export default RootLayout;
