import React from "react";
import Header from "./components/header";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="rounded-2xl m-1   backdrop-blur-xl bg-green-800/30 ">
      <div><Header /></div>
      <div>{children}</div>
    </div>
  );
}

export default layout;
