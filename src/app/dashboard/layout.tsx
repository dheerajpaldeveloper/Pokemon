import React from "react";
import Header from "./components/header";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-custom-blue rounded-2xl m-2">
      <div><Header /></div>
      <div>{children}</div>
    </div>
  );
}

export default layout;
